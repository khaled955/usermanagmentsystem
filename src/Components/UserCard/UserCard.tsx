
import { Link } from "react-router-dom";
import { UserCardProps } from "../../Interfaces/interfaces";
import { modalContext } from "../../Context/Modal.context";
import { useContext } from "react";
import {motion} from "motion/react"
export default function UserCard({ userInfo }: UserCardProps) {
  const { id, age, email, firstName, phone, image, birthDate } = userInfo;

    const context = useContext(modalContext)
 if(!context) return;
 const {handleModalShow,handleModalUpdateContent,handleModalDeleteContent} = context







  return (
    <motion.div
    initial={{ opacity: 0  ,scale:0}}
  whileInView={{ opacity: 1  ,scale:1}}
  transition={{duration:1}}
      className="user-card px-5 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* User Image */}
      <div className="user-image h-48 overflow-hidden">
        <motion.img
         initial={{rotate:0}}
         whileInView={{rotate:180}}
         transition={{duration:1}}
          className="w-full h-full object-cover"
          src={image}
          alt={firstName}
        />
      </div>

      {/* User Info */}

      <div className="user-info p-4">
        {/* User Name */}
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          {firstName}
        </h2>

    <div className="p-4">
          {/* User Details */}
          <div className="user-details space-y-2 text-gray-600">
          <div className="flex items-center">
            <i className="fas fa-birthday-cake mr-2 text-gray-500"></i>
            <span>Age: {age}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-envelope mr-2 text-gray-500"></i>
            <a href={`mailto:${email}`} className="hover:text-blue-500 text-[12px]">
            {email}
            </a>
          </div>
          <div className="flex items-center">
            <i className="fas fa-phone mr-2 text-gray-500"></i>
            <span>{phone}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-calendar-alt mr-2 text-gray-500"></i>
            <span className="text-sm">Birth Date: {birthDate}</span>
          </div>
        </div>
    </div>

        {/* Social Icons */}
        <div className="user-social mt-6">
          <ul className="flex justify-center space-x-4">
            <li className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center rounded-full hover:bg-blue-600 transition-colors duration-300">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center rounded-full hover:bg-pink-600 transition-colors duration-300">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center rounded-full hover:bg-black transition-colors duration-300">
              <a href="#">
                <i className="fab fa-x-twitter"></i>
              </a>
            </li>
            <li className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center rounded-full hover:bg-red-600 transition-colors duration-300">
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="user-action flex flex-col gap-2">
          <Link className="my-btn inline-block bg-black text-center" to={`/dashboard/userdetails/${id}`}> Show More <i className="fa-solid fa-right-long ml-2 text-yellow-600"></i></Link>
          <button onClick={()=>{
            handleModalShow()
            handleModalUpdateContent()
            localStorage.setItem("currentIdUpdate",JSON.stringify(id))
          }} className="my-btn mt-0">Update</button>
          <button onClick={()=>{
            handleModalDeleteContent()
            handleModalShow()
            localStorage.setItem("currentIdDelet",JSON.stringify(id))

          }} className="my-btn mt-0 bg-red-500 hover:bg-red-800 transition-colors duration-300">Delete</button>
        </div>
      </div>
    </motion.div>
  );
}
