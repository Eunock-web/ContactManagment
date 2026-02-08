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

//Fonction pour ajouter un contact a une favoris
export const AddToFavoris = (userId: number | string | undefined, contactId: number | string | undefined) => {
    const contacts = ContactByUser(userId);
    const contactToAdd = contacts.find(c => String(c.id) === String(contactId));

    if (!contactToAdd) {
        console.warn(`Contact with id ${contactId} not found for user ${userId}`);
        return;
    }

    const favoris_tab = localStorage.getItem('favoris_contact');
    let favoris_contact: Favoris[] = [];

    if (favoris_tab) {
        try {
            favoris_contact = JSON.parse(favoris_tab);
        } catch (e) {
            console.error("Error parsing favoris_contact", e);
            favoris_contact = [];
        }
    }

    // Check if the contact is already in the favorites list to avoid duplicates
    const alreadyExists = favoris_contact.some(f => f.contact.id === contactToAdd.id);

    if (!alreadyExists) {
        const newFavoris: Favoris = {
            id: Date.now(), // Generate a unique ID for the favorite record
            contact: contactToAdd
        };
        favoris_contact.push(newFavoris);
        localStorage.setItem("favoris_contact", JSON.stringify(favoris_contact));
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
