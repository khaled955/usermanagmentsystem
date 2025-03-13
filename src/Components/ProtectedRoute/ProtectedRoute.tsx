import { useContext } from "react";
import { userContext } from "../../Context/Token.context";
import { Navigate } from "react-router-dom";
import { ProtectedRouteProps } from "../../Interfaces/interfaces";

export default function ProtectedRoute({children}:ProtectedRouteProps) {

  const context = useContext(userContext);
if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
}
const {token } = context


if(token){
    return children
}else{
    return <Navigate to="/"/>
}




 
}
