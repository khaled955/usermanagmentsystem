
import { useFormik } from "formik"
import { addFormProps, FormValues, UserDataDecoded } from "../../Interfaces/interfaces"
import { useContext, useState } from "react"
import * as Yup from 'yup';
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { userContext } from "../../Context/Token.context";
import { jwtDecode } from "jwt-decode";
import {motion} from "motion/react"




export default function AddUserForm({handleAddFormHide}:addFormProps) {
    const [errorMessage , setErrorMessage] = useState< null | string>(null)
    const userContextControl = useContext(userContext);
    const[showData,setShowData]= useState([])
  
  
  // validation by Yup
  const validationSchema =Yup.object().shape({
      firstName:Yup.string().required("first Name is Required").min(3 , "first Name Must Be More Than 3 Character"),
      lastName:Yup.string().required("last Name Is Required").min(3,"last Name Must Be More Than 3 Character"),
      age:Yup.number().required("Age Is Required").min(18,"Age Not Less Than 18 Years"),
    })
    
    
    
  
  
    const formik = useFormik<FormValues>({
      initialValues:{
        firstName:"",
        lastName:"",
        age: 0,
      },
      onSubmit:(data)=>{
        handleSubmitData(data)
      },
      validationSchema,
      
     })
    
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
    // submit data function
    async function handleSubmitData(data:FormValues){
   
      const options ={
        url:`https://dummyjson.com/users/add`,
        method:`POST`,
        data,
      }
      const toastId = toast.loading("Adding UnderProcessing...")
  
  try {
    const {data} = await axios.request( options)
    setShowData(data)
    console.log(showData)
    toast.success("Add New User Done Successfully")
  setTimeout(()=>{
    handleAddFormHide()
  },2000)
  } catch (error) {
     
      const axiosError = error as AxiosError; 
      if (axiosError.response) {
        setErrorMessage(axiosError.response.statusText); 
      } else {
        setErrorMessage("An unexpected error occurred"); 
      }
   
  }finally{
  toast.dismiss(toastId)
  }
  
    }
  
  
  
   
    if (!userContextControl) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    const {token } = userContextControl;
    
    const userInfoDecoded: UserDataDecoded | null = token ? jwtDecode(token) : null;
    
    
  
  
  
  
  
    return (
      <>
     <div className="update-container h-screen bg-black/45 text-white flex justify-center items-center fixed top-0 left-0 w-full z-[9]">
  
  
    <motion.div
  initial={{scale:0,opacity:0}}
  animate={{scale:1,opacity:1}}
  transition={{duration:1}}
  
     className="space-y-4 p-6 rounded-md w-full sm:w-[50%] bg-gray-900 relative">
    <i onClick={handleAddFormHide}  className="fa-solid fa-rectangle-xmark absolute top-2 right-2 cursor-pointer text-3xl"></i>
    <div className="login-box">
        <div className="login-text text-center">
        <h2 className=" text-xl">Welcome <span className="text-yellow-600"> {userInfoDecoded?.firstName} </span> To</h2>
        <h1 className="font-black text-xl font-serif mb-5">User Add Data Form</h1>
        </div>
      </div>
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
        <div className="relative mb-5">
          <input value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} name="firstName" type="text" id="small_filled" className="block px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="small_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name</label>
          {formik.errors.firstName && formik.touched.firstName && <p className="text-sm text-white">{formik.errors.firstName}</p>}
      </div>
        <div className="relative mb-5">
          <input value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} name="lastName" type="text" id="small_filledTwo" className="block px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="small_filledTwo" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">lastName</label>
          {formik.errors.lastName && formik.touched.lastName && <p className="text-sm text-white">{formik.errors.lastName}</p>}
  
      </div>

      <div className="relative mb-5">
          <input value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} name="age" type="number" id="small_filledThree" className="block px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="small_filledThree" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Age</label>
          {formik.errors.age && formik.touched.age && <p className="text-sm text-white">{formik.errors.age}</p>}
  
      </div>
  

  
      <button className="my-btn" type="submit"> Add</button>
        </form>
      </div>
  
  {errorMessage && <p className="text-center text-red-700 font-semibold capitalize">{errorMessage}</p>
  }
    </motion.div>
  
  
  
     </div>
      </>
    )
}
