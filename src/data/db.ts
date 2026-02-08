import { contacts } from "./contact";
import { users } from "./user";

export interface Contact {
    id: number;
    userId: number;
    firstname: string;
    lastname: string;
    jobTitle: string;
    email: string;
    phone: string;
    address: string;
    country: string;
    avatarUrl: string;
}

{/**Ce fichier sera utiliser comme l'intermediaire d'une base de donnée */ }
const user = users;
const contact = contacts;

const init_db = () => {
    // Initialize if either is missing or empty
    const userDb = localStorage.getItem('user_db');
    const contactsDb = localStorage.getItem('contacts_db');

    if (!userDb || userDb === "[]" || !contactsDb || contactsDb === "[]") {
        if (!userDb || userDb === "[]") localStorage.setItem('user_db', JSON.stringify(user));
        if (!contactsDb || contactsDb === "[]") localStorage.setItem('contacts_db', JSON.stringify(contact));
    }
}

init_db();

export const getAllUser = () => {
    const data = localStorage.getItem('user_db');
    if (!data) {
        return [];
    }
    try {
        return JSON.parse(data);
    } catch (e) {
        console.error("Error parsing user_db", e);
        return [];
    }
}

export const ContactByUser = (userId: number | undefined | string): Contact[] => {
    const data = localStorage.getItem('contacts_db');

    if (!data || userId === undefined) {
        return [];
    }

    // Ensure userId is a number for comparison
    const targetUserId = typeof userId === 'string' ? parseInt(userId, 10) : userId;

    try {
        const allContacts = JSON.parse(data) as Contact[];
        return allContacts.filter((c) => Number(c.userId) === targetUserId);
    } catch (e) {
        console.error("Error parsing contacts_db", e);
        return [];
    }
} 