
export default function UpdateUsers() {
  return (
    <div className="update-user-container p-5 font-bold text-gray-700">
      <h2 className="mb-7">Update User Data</h2>
      <hr />
     <div className="update-user-info mt-4 space-y-5">
        <div className="update-box flex gap-4 flex-wrap">
            <div className="flex-1">
                <label htmlFor="firstname" className="block text-gray-700 text-sm font-bold"> First Name</label>
                <input className="form-control bg-white text-black w-full font-light" type="text" name="firstname" id="firstname" placeholder="Enter Your First Name" />
            </div>
            <div className="flex-1">
                <label htmlFor="lastname" className="block text-gray-700 text-sm font-bold"> Last Name</label>
                <input className="form-control bg-white text-black w-full font-light" type="text" name="lastname" id="lastname" placeholder="Enter Your First Name" />
            </div>
        </div>

        <div className="update-box flex gap-4 flex-wrap">
            <div className="flex-1">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold"> Email</label>
                <input className="form-control bg-white text-black w-full font-light" type="email" name="email" id="email" placeholder="Enter Your Email" />
            </div>
            <div className="flex-1">
                <label htmlFor="age" className="block text-gray-700 text-sm font-bold"> Age</label>
                <input className="form-control bg-white text-black w-full font-light" type="number" name="age" id="age" placeholder="Enter Your Age" />
            </div>
        </div>
        <div className="update-box flex gap-4 flex-wrap">
            <div className="flex-1">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold"> Phone Number</label>
                <input className="form-control bg-white text-black w-full font-light" type="tel" name="phone" id="phone" placeholder="Enter Your Phone Number" />
            </div>
            <div className="flex-1">
                <label htmlFor="birth" className="block text-gray-700 text-sm font-bold"> BirthDate</label>
                <input className="form-control bg-white text-black w-full font-light lowercase" type="date" name="birth" id="birth" placeholder="Enter Your BirthDate" />
            </div>
        </div>
        <button className="my-btn">Update</button>
     </div>
    </div>
  )
}

