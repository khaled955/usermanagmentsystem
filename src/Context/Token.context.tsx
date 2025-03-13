/* eslint-disable react-refresh/only-export-components */
import { createContext, useState  ,ReactNode } from "react";
import { UserContextType } from "../Interfaces/interfaces";




export const userContext = createContext<UserContextType |null>(null)

export default function UserProvider({children} : { children: ReactNode }){
    const [token , setToken] = useState<null | string>(localStorage.getItem("userToken"))
   function handleLogOut(){
    localStorage.removeItem("userToken")
    setToken(null)
   }
    return <userContext.Provider value={{token ,setToken ,handleLogOut}}>
        {children}
    </userContext.Provider>
}