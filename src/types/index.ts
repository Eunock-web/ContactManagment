import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children : ReactNode,
    className? : string,
    icon? : ReactNode
}

export interface ContactData{
    firstname : string,
    lastname : string,
    jobTitle : string,
    email : string,
    phone : string,
    address : string,
    country : string,
    avatarUrl : string
}

export interface LoginInterface{
    name : string,
    email : string,
    password : string
}

export interface AuthContextType{
        user : LoginInterface | null; 
        loading : boolean;
        email : string | null;
        saveUSer : (user: LoginInterface) => void;
        logout : () => void;
}