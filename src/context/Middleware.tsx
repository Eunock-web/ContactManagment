import { Navigate } from "react-router-dom"


export const Middleware = ({children} : {children : React.ReactNode}) => {
    if(!localStorage.getItem('user_session')) {
        return <Navigate to="/login" />
    }
    return <>{children}</>
}