import { useContext, useEffect, useState } from "react";
import Loading from "../../Pages/Loading/Loading";
import UserCard from "../UserCard/UserCard";
import axios from "axios";
import toast from "react-hot-toast";
import { User } from "../../Interfaces/interfaces";
import UpdatDataForm from "../UpdateDataForm/UpdateDataForm";
import { modalContext } from "../../Context/Modal.context";
import { usersSearachContext } from "../../Context/UsersSearch.context";
import AddUserForm from "../AddUserForm/AddUserForm";

export default function AllUsers() {
  const[users , setUsers] = useState<User[]>([])
  const [originalUsers, setOriginalUsers] = useState<User[]>([]); 
  const [isLoading, setIsLoading] = useState(true);
  const[showAddForm,setShowAddForm]= useState(false)
    const modalContextControl = useContext(modalContext)

  const searchContext = useContext(usersSearachContext);

  // Check if context is null
  if (!searchContext) {
    throw new Error("NavBar must be used within a UsersSearchProvider");
  }

  const { filtereUsers ,filteredValues} = searchContext;





    useEffect(()=>{
      getData()
    },[])


    useEffect(()=>{
      if (filteredValues !== "") {
        setUsers(filtereUsers)
      }else{
        setUsers(originalUsers)
      }
    },[filteredValues ,filtereUsers ,originalUsers])






  if(!modalContextControl){
    return
  }
  const {showUpdateForm} = modalContextControl;
 
 




 async function getData(){


  try {
    const options ={
      url:'https://dummyjson.com/users',
      method:"GET",
    }
    const {data} =  await axios.request(options)
    setUsers(data.users)
    setOriginalUsers(data.users)
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message)
    }
  }finally{
    setIsLoading(false)
  }
 
}

function handleAddFormShow(){
  setShowAddForm(true)
}
function handleAddFormHide(){
  setShowAddForm(false)
}

  return (
    <div className="mt-4 px-3">
      {  showUpdateForm &&<UpdatDataForm/> }
      {showAddForm && <AddUserForm handleAddFormShow={handleAddFormShow} handleAddFormHide={handleAddFormHide}/>}
      <div className="users-control flex justify-between items-center mb-5">
        <h2 className=" text-2xl font-bold text-white">Users List</h2>
        <button onClick={handleAddFormShow} className="user-btn btn w-fit">
          Add New User
        </button>
      </div>
      <hr />
     

      <div className="user-card-container mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:w-[100%] w-full">
{ isLoading ? <Loading/> : users.length === 0  && filteredValues !== ""?   <p className="text-center text-3xl">No Users Available</p> : users.map(user=> <UserCard userInfo={user} key={user.id}/>
)}      
      </div>
    </div>
  )
}
