import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { useNavigate } from "react-router-dom";

interface User {
    username: string
}
interface LoginContextType {
    user:User | null,
    login : (token:string, username:string) => void,
    logout : () => void;
}
const LoginContext = createContext<LoginContextType|undefined>(undefined);
console.log(LoginContext);
interface LoginProviderProps  {
    children: ReactNode
}
export const LoginProvider : React.FC<LoginProviderProps> = ({children}) => {
    const [user,setUser] = useState<User |null>(null);
    const navigate = useNavigate();

    useEffect(
        () => {
           const token = localStorage.getItem('token');
           const username = localStorage.getItem('username');

           if(token && username){
            setUser({username})
           }
        }
    ,[]);

    const login = (token:string, username:string) => {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        setUser({username})
        navigate('/')
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setUser(null)
        navigate('/login')
    }

    return(
        <LoginContext.Provider value={{user,login,logout}}>
            {children}
        </LoginContext.Provider>
    );
    
}
export const useLogin = () : LoginContextType => {
    const context = useContext(LoginContext);
    console.log(context);
    if(context === undefined){
        throw new Error('login auth error')
    }

    return context;
}
