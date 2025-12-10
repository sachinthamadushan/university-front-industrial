import type React from "react";
import type { ReactNode } from "react";
import { useLogin } from "../context/LoginContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps{
    children:ReactNode
}

export const ProtectedRoute:React.FC<ProtectedRouteProps> = ({children}) => {
    const {user} = useLogin();

    if(!user){
        return <Navigate to="/login" />
    }
    return <>{children}</>;
}

