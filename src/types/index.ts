import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    children : ReactNode,
    className? : string,
    icon? : ReactNode
}