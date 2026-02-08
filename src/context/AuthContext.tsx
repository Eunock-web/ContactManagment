import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { type AuthContextType, type LoginInterface } from "../types";
import { Login, Logout } from "../data/function";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<LoginInterface | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [errors, setErrors] = useState<string | null>(null);

    const login = useCallback((email: string, password: string) => {
        const res = Login(email, password);

        if (res.success) {
            setUser(res.data);
            setEmail(email);
            setErrors(null);
        } else {
            setErrors(res.response);
        }
    }, []);

    const logout = useCallback(() => {
        const res = Logout();
        if (res.success) {
            setUser(null);
            setEmail(null);
            setErrors(null);
        } else {
            setErrors(res.response);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, email, errors, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }

    return context;
}