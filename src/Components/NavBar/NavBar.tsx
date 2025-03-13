/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useContext, useState } from "react"
import { NavBarProps } from "../../Interfaces/interfaces"
import { usersSearachContext } from "../../Context/UsersSearch.context"

export default function NavBar({handleShow ,handleHide ,show}:NavBarProps) {
  const [showToggle , setShowToggle] = useState(true)


  const context = useContext(usersSearachContext);

  // Check if context is null
  if (!context) {
    throw new Error("NavBar must be used within a UsersSearchProvider");
  }

  const { setFilteredValues ,filteredValues} = context;




// Debounce function
const debounce = <T extends (...args: any[]) => void>(func: T, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>; 
  return (...args: Parameters<T>) => { 
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};



 // Debounced version of setFilteredValues
 const debouncedSetFilteredValues = useCallback(
  debounce((value: string) => {
    setFilteredValues(value);
  }, 300), // 300ms delay
  [setFilteredValues]
);











  return (
   <>
   <nav className="bg-black py-1 px-3 flex justify-between items-center relative">
    <div className="toggle-btn md:hidden text-white">
{!show ? <i onClick={()=>{setShowToggle(!showToggle)
  handleShow()
}} className="fa-solid fa-bars mr-2 text-xl cursor-pointer"></i> :<i onClick={()=>{setShowToggle(!showToggle)
  handleHide()
}} className="fa-solid fa-square-xmark text-xl cursor-pointer"></i>
    }
    </div>
   <div className="ms-auto flex gap-5 items-center sm:w-[50%]">
   <div className="search-nav bg-yellow-400 rounded-md px-3 flex-1 flex items-center">
      <input onChange={(e)=>{
        // setFilteredValues(e.target.value)

        debouncedSetFilteredValues(e.target.value);


      }} value={filteredValues} className="flex-1 outline-0 py-1" type="search" placeholder="Search..." />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
    <i className="fa-solid fa-bell text-2xl text-white hidden sm:block"></i>
   </div>
   </nav>
   
   
   </>
  )
}
