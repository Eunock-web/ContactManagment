import { createContext, useState, type ReactNode } from "react";
import {  type AuthContextType, type LoginInterface } from "../types";


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children} : {children : ReactNode}) =>{
    const [user, setUser] = useState<LoginInterface | null>(null);


    const login = async (email: string, password: string) => {
        
    }
}