import { getAllUser } from "./db";
import type { UserInterface } from "../types";


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

