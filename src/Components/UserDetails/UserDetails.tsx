/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { User } from "../../Interfaces/interfaces"
import axios from "axios"
import Loading from "../../Pages/Loading/Loading"

export default function UserDetails() {
  const {userid} = useParams()
const[info , setInfos] = useState<User | null>(null)
async function getUserDetails(){
try{
  const options = {
    url:`https://dummyjson.com/users/${userid}`,
    method:"GET",
  }
  const{data} = await axios.request(options)
  setInfos(data)
}catch{
  console.log("error")
}
}


useEffect(()=>{
  getUserDetails()
},[])







  return (
    <>
    {!info ? <Loading/> :<div className="user-details-container px-5 py-6">
        <h2 className="font-bold capitalize text-2xl text-red-500">{info.firstName}-Details</h2>
        <hr />
        <div className="user-details-box mt-6 py-10">
          <div className="img flex justify-center flex-col items-center">
            <img className="w-[90px]" src={info.image} alt={info.firstName} />
            <h3 className="capitalize text-white text-xl">{info.role}</h3>
            <p className="capitalize mb-6 text-white">{info.university}</p>
          </div>
          <div className="user-details-info flex gap-5 h-screen flex-wrap flex-col">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-white"> First Name:</label>
              <input className="form-control" type="text" name="firstname" id="firstName" readOnly value={info.firstName} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-white"> Last Name:</label>
              <input className="form-control" type="text" name="lastname" id="lastName" readOnly value={info.lastName} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Email" className="text-white"> Email:</label>
              <input className="form-control" type="text" name="Email" id="Email" readOnly value={info.email} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Age" className="text-white"> Age:</label>
              <input className="form-control" type="text" name="Age" id="Age" readOnly value={info.age} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="birth" className="text-white"> Date Of Birth:</label>
              <input className="form-control" type="text" name="birth" id="birth" readOnly value={info.birthDate} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-white">Phone Number:</label>
              <input className="form-control" type="text" name="phone" id="phone" readOnly value={info.phone} />
            </div>



          </div>
        </div>
    </div>}
    </>
  )
}
