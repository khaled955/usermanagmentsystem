/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useEffect, useState } from "react";
import { UsersSearchContextType } from "../Interfaces/interfaces";
import axios from "axios";

export const  usersSearachContext = createContext<UsersSearchContextType | null>(null)

export default function UsersSearchProvider({children}: { children: ReactNode }){
 const [filteredValues , setFilteredValues] = useState("")

const [filtereUsers , setFilteredUsers] = useState([])





async function getFilteredUsers(){

try{

const options ={
    url:`https://dummyjson.com/users/search?q=${filteredValues}`,
    method:"GET"
}

const{data} = await axios.request(options)
setFilteredUsers(data.users)
}catch(error){
console.log(error)
}




}






useEffect(()=>{

    getFilteredUsers()

},[filteredValues])


    return <usersSearachContext.Provider value={{filteredValues,setFilteredValues,filtereUsers,setFilteredUsers}}>

{children}
    </usersSearachContext.Provider>
}