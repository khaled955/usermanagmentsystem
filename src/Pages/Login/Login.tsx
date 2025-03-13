import { useFormik } from "formik"
import {  CustomApiError, FormValues } from "../../Interfaces/interfaces"
import { useContext, useState } from "react"
import * as Yup from 'yup';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Context/Token.context";


export default function Login() {
  const[show , setShow] = useState(false)
  const [errorMessage , setErrorMessage] = useState<string | null>(null)
  const navigate = useNavigate()
  const context = useContext(userContext);
if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
}
const {setToken } = context;



function handleShowPassword(){
  setShow(!show)
}

// validation by Yup
const validationSchema =Yup.object().shape({
  username:Yup.string().required("Email is Required"),
  password:Yup.string().required("Password Is Required").min(3,"Password Must Be More Than 3 Character")
})

  // submit data function
  async function handleSubmitData(data:FormValues){

    const options ={
      url:'https://dummyjson.com/auth/login',
      method:`POST`,
      data,
    }
    const toastId = toast.loading("Waiting")

try {
  const {data} = await axios.request( options)
  console.log(data)
  setToken(data.accessToken)
  localStorage.setItem("userToken", data.accessToken)
  navigate("/dashboard")
} catch (error) {
  
  const apiError = error as CustomApiError;
  if (apiError.response && apiError.response.data && apiError.response.data.message) {
    setErrorMessage(apiError.response.data.message);
  }
}finally{
toast.dismiss(toastId)
}

  }


// control of input by formik
 const formik = useFormik<FormValues>({
  initialValues:{
    username:"",
    password:""
  },
  onSubmit:(data)=>{
    handleSubmitData(data)
  },
  validationSchema,
  
 })







  return (
    <>
   <div className="login-container h-screen bg-black text-white flex justify-center items-center">


  <div className="space-y-4 p-6 rounded-md w-full sm:w-[50%]">
  <div className="login-box">
      <div className="login-text text-center">
      <h2 className=" text-xl">Welcome To</h2>
      <h1 className="font-black text-4xl font-serif mb-5">User Managment System</h1>
      </div>
    </div>
    <div className="form">
      <form onSubmit={formik.handleSubmit}>
      <div className="relative mb-5">
        <input value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} name="username" type="text" id="small_filled" className="block px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 outline-none focus:ring-0 focus:border-blue-600 peer placeholder:text-center" placeholder="ex:emilys" />
        <label htmlFor="small_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">User-Name</label>
        {formik.errors.username && formik.touched.username && <p className="text-sm text-red-500">{formik.errors.username}</p>}
    </div>
      <div className="relative">
        <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" type={`${show ? "text":"password"}`} id="small_filled" className="block px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 outline-none focus:ring-0 focus:border-blue-600 peer placeholder:text-center" placeholder="ex:emilyspass" />
        <label htmlFor="small_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
        <i onClick={handleShowPassword} title={`${show ? "hide Password":"Show Password"}`} className={`fa-solid ${!show ? "fa-eye-slash":"fa-eye"} absolute right-4 top-[50%] -translate-y-[50%] text-black cursor-pointer`}></i>
        {formik.errors.password && formik.touched.password && <p className="text-sm text-red-500">{formik.errors.password}</p>}

    </div>

    <button className="my-btn" type="submit"> Login</button>
      </form>
    </div>


<p className="text-center text-red-700 font-semibold capitalize">{errorMessage && errorMessage}</p>
  </div>



   </div>
    </>
  )
}
