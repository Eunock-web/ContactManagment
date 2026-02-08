import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { Contact } from "../data/db";

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

export interface UserInterface{
    id : number,
    name : string,
    email : string,
    password : string
}

export interface LoginInterface{
    email : string,
    password : string
}

export interface AuthContextType{
        user : UserInterface | null; 
        email : string | null;
        errors : string | null;
        login : (email:string, password:string)=>void;
        logout : () => void;
}

export interface Favoris{
    id : number,
    contact : Contact
}