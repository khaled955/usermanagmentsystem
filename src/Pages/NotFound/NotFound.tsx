import { useNavigate } from "react-router-dom"
import notFound from "../../assets/images/found.webp"
export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="not-found-container h-screen flex flex-col justify-center items-center bg-gray-400">
      <img className="w-[50%]" src={notFound} alt="not-found-imge" />
      <button onClick={()=>{
        navigate("/dashboard")
      }} className="btn w-fit font-bold">Back To Home</button>
    </div>
  )
}
