import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../../Context/Token.context";
import { jwtDecode } from "jwt-decode";
import { SideBarProps, UserDataDecoded } from "../../Interfaces/interfaces";

export default function SideBar({handleHide}:SideBarProps) {

  const navigate = useNavigate()

  const context = useContext(userContext);
if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
}
const {handleLogOut ,token } = context;


const userInfoDecoded: UserDataDecoded | null = token ? jwtDecode(token) : null;

  return (
   <>
<div className="side-box-container bg-black fixed  text-white p-4 left-0  h-screen bottom-0 pt-11 w-[100%] md:static z-[9999999999999] isolate">
<h2 className="border-l-2 pl-2 border-l-amber-400 text-xl font-bold mb-3">UMS</h2>  
<div className="side-box-info flex flex-col gap-3 justify-center items-center">
  <img className="size-24 rounded-full border-2" src={userInfoDecoded?.image} alt="profile photo" />
  <h1 className=" capitalize font-bold">{userInfoDecoded?.firstName}-{userInfoDecoded?.lastName}</h1>
</div>
<div className="side-box-links mt-3">
  <ul className="flex flex-col gap-5">

    <li>
    <NavLink
    
  className={({ isActive }) =>
    `w-full inline-block py-2 px-1 font-semibold ${isActive ? "bg-red-600 rounded-md" : ""}`
  }
  to="home"
  onClick={()=>{handleHide()}}
>
  <i className="fa-solid fa-house mr-1"></i> Home
</NavLink>
    </li>


    <li>
    <NavLink
    
  className={({ isActive }) =>
    `w-full inline-block py-2 px-1 font-semibold ${isActive ? "bg-red-600 rounded-md" : ""}`
  }
  to="/dashboard/updateuser"
  onClick={()=>{handleHide()}}
>        
         <i className="fa-solid fa-user mr-1"></i>Update Users</NavLink>
    </li>




    <li>
    <NavLink
    
  className={({ isActive }) =>
    `w-full inline-block py-2 px-1 font-semibold ${isActive ? "bg-red-600 rounded-md" : ""}`
  }
  to="/dashboard/adduser"
  onClick={()=>{handleHide()}}
>        
         <i className="fa-solid fa-user-plus mr-1"></i> Add User</NavLink>
    </li>

    <li>
    <NavLink
    
  className={({ isActive }) =>
    `w-full inline-block py-2 px-1 font-semibold ${isActive ? "bg-red-600 rounded-md" : ""}`
  }
  to={`/dashboard/userdetails/${userInfoDecoded?.id}`}
  onClick={()=>{handleHide()}}
>        
        <i className="fa-solid fa-address-card mr-1"></i> Profile</NavLink>
    </li>
  </ul>
</div>
<span onClick={()=>{
  handleLogOut()
  navigate("/")
}} className="absolute bottom-3 cursor-pointer">
  LogOut <i className="fa-solid fa-right-from-bracket ml-3"></i>
</span>
  </div> 
   </>
  )
}



{/* <div className="side-box-container bg-black fixed  text-white p-4 left-0 top-0 bottom-0 pt-11 w-[100%] md:w-[20%]"> */}
