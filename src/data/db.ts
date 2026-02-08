import { users } from "./user";

{/**Ce fichier sera utiliser comme l'intermediaire d'une base de donnée */ }
const user = users;

const init_db = () => {
    if (!localStorage.getItem('user_db')) {
        localStorage.setItem('user_db', JSON.stringify(user))
    }
}

init_db();

export const getAllUser = () => {
    const data = localStorage.getItem('user_db');
    if (!data) {
        return null;
    }
    return JSON.parse(data)
}