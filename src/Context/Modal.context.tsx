/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";
import { ModalContextValue, ModalProviderProps } from "../Interfaces/interfaces";

  
  export const modalContext = createContext<ModalContextValue | null>(null);
  
  

export default function ModalProvider({children}:ModalProviderProps){

       const [showModal , setShowModal] = useState(false)
       const[showUpdateForm , setShowUpdateForm] = useState(false)
       const [modalContent , setModalContent] = useState("")
       function handleModalShow(){
        setShowModal(true)
       }
       function handleModalHide(){
        setShowModal(false)
       }
    
       function handleModalUpdateContent(){
        setModalContent("Update")
       }
       function handleModalDeleteContent(){
        setModalContent("Delete")
       }
    
    function handleUpdateShowForm(){
      setShowUpdateForm(true)
    }
  
    function handleUpdateHideForm(){
      setShowUpdateForm(false)
    }
  

return <modalContext.Provider value={{showModal,modalContent,handleModalShow,handleModalHide,handleModalUpdateContent,handleModalDeleteContent ,showUpdateForm,handleUpdateShowForm,handleUpdateHideForm}}>
    {children}
</modalContext.Provider>


}