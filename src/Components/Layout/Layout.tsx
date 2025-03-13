import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import { useContext, useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { userContext } from "../../Context/Token.context";
import { UserDataDecoded } from "../../Interfaces/interfaces";
import { jwtDecode } from "jwt-decode";
import {motion ,AnimatePresence} from "motion/react"
export default function Layout() {
  const [show , setShow] = useState(false)
   const[showWelcomePopUp , setWelcomePopUp] = useState(true)
  const context = useContext(userContext);
if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
}
const {token } = context;


const userInfoDecoded: UserDataDecoded | null = token ? jwtDecode(token) : null;

  
function handleShow(){
  setShow(true)
}
function handleHide(){
  setShow(false)
}


useEffect(() => {
  const timer = setTimeout(() => {
    setWelcomePopUp(false); // Trigger exit animation
  }, 4000);

  return () => clearTimeout(timer); // Cleanup timer
}, []);







  return (
    <>

    <AnimatePresence>
{showWelcomePopUp &&     <motion.div
key="welcome-popup"
initial={{opacity:0 ,y:-300 ,scale:0}}
animate={{opacity:1 ,y:0 ,scale:1.3}}
transition={{duration:3}}
exit={{rotate:360,scale:0 ,transition:{duration:1}}}
 className="fixed w-[50%] bg-black rounded-md top-[50%] z-[9999999999999] text-yellow-600 flex justify-center left-[50%] -translate-x-[50%] py-7 -translate-y-[50%] items-center text-center flex-col gap-2">
  <span>Hello ❤️</span>
  <h1 className="text-white text-lg font-bold">{userInfoDecoded?.firstName}{userInfoDecoded?.lastName}</h1>
      <p className="font-black text-md">To Our User Managment System</p>
    </motion.div> }
    </AnimatePresence>



    <Modal />
    <div className=" flex min-h-screen ">
<div className={`${show ? "w-[300px]":"hidden"} md:w-[15%] fixed h-screen md:block z-[9]`}>
 <SideBar handleHide={handleHide}/>  
 </div>  
<div className="w-full md:w-[85%] ms-auto">
 <div className="">
  <div className="relative z-[99]">
  <NavBar handleShow={handleShow} handleHide={handleHide} show={show} />
  </div>
 <Outlet/>
 </div>

</div>



    </div>
    
    </>
  )
}



