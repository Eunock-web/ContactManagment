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