import { ContactByUser, getAllUser, type Contact } from "./db";
import type { Favoris, UserInterface } from "../types";
import { contacts } from "./contact";


export const Login = (email: string, password: string) => {
    //Recuperer la liste des utilisateurs
    const users = getAllUser();

    //Verifier si l'email et le password correspond 
    const userAuthenticated = users.find((u: UserInterface) => u.email === email && u.password === password);

    if (userAuthenticated) {
        localStorage.setItem('user_session', JSON.stringify(userAuthenticated));
        return {
            "success": true,
            "response": `Bienvenue ${userAuthenticated.name}`,
            "data": userAuthenticated
        }
    } else {
        return {
            "success": false,
            "response": `Mot de passe ou email incorrect`,
        }
    }
}

export const Logout = () => {
    if (!localStorage.getItem('user_session')) {
        return {
            "success": false,
            "response": "Veuillez vous connecter"
        }
    }
    localStorage.removeItem("user_session");
    return {
        "success": true,
        "response": "Deconnecter avec success"
    }
}

export const countries = [...new Set(contacts.map(c => c.country))].sort();

export const Jobs = [...new Set(contacts.map(c => c.jobTitle))].sort();

// Check if a contact is in favorites
export const IsContactFavoris = (userId: number | string | undefined, contactId: number | string | undefined): boolean => {
    const favoris_tab = localStorage.getItem('favoris_contact');
    if (!favoris_tab) return false;

    try {
        const favoris: Favoris[] = JSON.parse(favoris_tab);
        return favoris.some(f => String(f.contact.id) === String(contactId) && String(f.contact.userId) === String(userId));
    } catch (e) {
        console.error("Error parsing favoris_contact", e);
        return false;
    }
}

// Toggle a contact in favorites
export const ToggleFavoris = (userId: number | string | undefined, contactId: number | string | undefined) => {
    const favoris_tab = localStorage.getItem('favoris_contact');
    let favoris: Favoris[] = [];

    if (favoris_tab) {
        try {
            favoris = JSON.parse(favoris_tab);
        } catch (e) {
            console.error("Error parsing favoris_contact", e);
            favoris = [];
        }
    }

    const isFavoris = favoris.some(f => String(f.contact.id) === String(contactId) && String(f.contact.userId) === String(userId));

    if (isFavoris) {
        // Remove from favorites
        favoris = favoris.filter(f => !(String(f.contact.id) === String(contactId) && String(f.contact.userId) === String(userId)));
    } else {
        // Add to favorites
        const contacts = ContactByUser(userId);
        const contactToAdd = contacts.find(c => String(c.id) === String(contactId));

        if (!contactToAdd) {
            console.warn(`Contact with id ${contactId} not found for user ${userId}`);
            return;
        }

        const newFavoris: Favoris = {
            id: Date.now(),
            contact: contactToAdd
        };
        favoris.push(newFavoris);
    }

    localStorage.setItem("favoris_contact", JSON.stringify(favoris));
}


//Fonction pour mettre à jour un contact
export const UpdateContact = (contactId: number | string | undefined, updatedData: Partial<Contact>) => {
    const contact_db = localStorage.getItem('contacts_db');
    if (!contact_db) return null;

    try {
        let contacts: Contact[] = JSON.parse(contact_db);
        const index = contacts.findIndex(c => String(c.id) === String(contactId));

        if (index === -1) {
            console.warn(`Contact with id ${contactId} not found`);
            return null;
        }

        contacts[index] = { ...contacts[index], ...updatedData };
        localStorage.setItem('contacts_db', JSON.stringify(contacts));
        return contacts[index];
    } catch (e) {
        console.error("Error parsing or updating contacts_db", e);
        return null;
    }
}

// Get all favorite contacts for a user
export const GetFavorisByUser = (userId: number | string | undefined): Contact[] => {
    const favoris_tab = localStorage.getItem('favoris_contact');
    if (!favoris_tab) return [];

    try {
        const favoris: Favoris[] = JSON.parse(favoris_tab);
        return favoris
            .filter(f => String(f.contact.userId) === String(userId))
            .map(f => f.contact);
    } catch (e) {
        console.error("Error parsing favoris_contact", e);
        return [];
    }
}


//Fonction pour la creation d'un contact
export const CreateContact = (userId: number | string | undefined, contactData: Omit<Contact, 'id' | 'userId'>) => {
    const contact_db = localStorage.getItem('contacts_db');
    let contacts: Contact[] = [];

    if (contact_db) {
        try {
            contacts = JSON.parse(contact_db);
        } catch (e) {
            console.error("Error parsing contacts_db", e);
            contacts = [];
        }
    }

    const newContact: Contact = {
        ...contactData,
        id: Date.now(),
        userId: Number(userId)
    };

    contacts.push(newContact);
    localStorage.setItem('contacts_db', JSON.stringify(contacts));
    return newContact;
}

//Fonction pour supprimer un contact
export const DeleteContact = (userId: number | string | undefined, contactId: number | string | undefined) => {
    const contact_db = localStorage.getItem('contacts_db');
    if (!contact_db) return;

    try {
        let contacts: Contact[] = JSON.parse(contact_db);
        const initialLength = contacts.length;

        // Filter out the contact to delete, ensuring it belongs to the user
        contacts = contacts.filter(c => !(String(c.id) === String(contactId) && String(c.userId) === String(userId)));

        if (contacts.length === initialLength) {
            console.warn(`Contact with id ${contactId} not found for user ${userId}`);
            return;
        }

        localStorage.setItem('contacts_db', JSON.stringify(contacts));
    } catch (e) {
        console.error("Error parsing or updating contacts_db", e);
    }
}


