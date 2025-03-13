import { useContext } from "react"
import { modalContext } from "../../Context/Modal.context"
import { userContext } from "../../Context/Token.context";
import { UserDataDecoded } from "../../Interfaces/interfaces";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import toast from "react-hot-toast";

export default function Modal() {
    const userContextControl = useContext(userContext);
    const modalContextControl = useContext(modalContext)
 if(!modalContextControl) return;
 const {showModal,modalContent,handleModalHide ,handleUpdateShowForm} = modalContextControl;


if (!userContextControl) {
    throw new Error("useUserContext must be used within a UserProvider");
}
const {token } = userContextControl;


const userInfoDecoded: UserDataDecoded | null = token ? jwtDecode(token) : null;



async function deletUser(){
  const toastId = toast.loading("Delet Process Under Processing")
  try {
    const{data} = await axios.delete(`https://dummyjson.com/users/${localStorage.getItem("currentIdDelet")}`)
    toast.success(`${data.firstName} Is Deleted`)
  } catch (error) {
    console.log(error)
  }finally{
toast.dismiss(toastId)
  }
}




  return (
    <>
    <div onClick={()=>{

    }} id="my_modal_1" className={`modal ${showModal?"modal-open":""}`}>
  <div className="modal-box ">
    <h3 className="font-bold text-lg">Hello ! {userInfoDecoded?.firstName}</h3>
    <p className="py-4 text-gray-700 capitalize border-y-[1px] my-3 border-gray-500/10">Are You Want To {modalContent} Your Data?</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}

        <button onClick={()=>{
            handleModalHide()
             if (modalContent === "Update") {
              handleUpdateShowForm()
             }
             
               if (modalContent === "Delete") {
                deletUser()
               }

        }} className=" px-4 py-1 rounded-md transition-all cursor-pointer duration-300 bg-red-300 hover:bg-red-700 hover:text-white">Yes</button>
        <button onClick={handleModalHide} className="ml-5 px-4 py-1 rounded-md transition-all cursor-pointer duration-300 bg-blue-300 hover:bg-blue-700 hover:text-white">Close</button>
      </form>
    </div>
  </div>
</div>
    
    
    
    </>
  )
}
