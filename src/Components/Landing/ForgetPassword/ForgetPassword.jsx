import React, { useState } from "react";
import logo from "../../../assets/Images/LogoWithBlack.png";
import { Link } from "react-router-dom";
export default function ForgetPassword() {
 const [check, setCheck] = useState(false);

  return (
    <>
      <div className="min-h-[50vh] bg-white">
        <div className=" flex my-5 md:mx-9 justify-start items-center">
       <Link to='/'>
         <img src={logo} alt="" />

       </Link> 
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1">
            <div className="w-52 h-52   place-self-center hover:bg-secondColor group/hover   bg-mainColor transition-all rounded-full mx-auto  flex  items-center justify-center">
         {check? <i class="fas fa-paper-plane text-[100px] text-white"></i>:<i class="fa-solid fa-key text-[100px] text-white"></i>}
       
            </div>
            <div className="mt-10 ">
              <h1 className="text-4xl mx-5 md:mx-0 text-secondColor font-bold">
               {check ?
              <h1>Help is on the way</h1>
               
               : <h1>Lost Your Keys to Balance?</h1> } 
              </h1>
              <p className="text-[15px]  mx-5 md:mx-0 text-secondColor my-2 leading-relaxed	whitespace-pre-line	">
           
  {check
    ? <p>
      Check your email for instructions. If you don’t see it, give your <br /> spam folder  a quick peek!

    </p>
    : <p>

      No worries! Enter your email, and we’ll send you a secure link to reset your password.<br />Your patients need you back in action!
    </p>
  }
</p>

             
            </div>

{
  check?null: (
 <> <div className="my-8 text-center w-[95%] md:w-full">  
    <label
      htmlFor="small-input"
      className="block mb-2 mx-3 md:mx-0 text-[15px] font-medium text-secondColor font-roboto dark:text-white"
    >
      <div className="flex justify-start ms-12 md:ms-0 items-center">
        <i className="fa-solid fa-envelope me-3"></i>
        <p>Email</p>
      </div>
    </label>
    <input
      type="text"
      id="small-input"
      placeholder="Email"
      className="w-3/4 place-self-center md:w-full placeholder:text-[#B0B0B0] placeholder-opacity-50 shadow-md p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>

  <div className="flex justify-center items-center flex-col gap-5">
    <button
      onClick={() => setCheck(true)}
      className="bg-mainColor hover:bg-secondColor transition-all w-3/4 md:w-full font-medium text-white px-4 py-2 rounded-lg"
    >
      Send Reset Link
    </button> 
  </div>
  </>)
               }
          
              <Link to="/SignIn" className="my-4 text-center"><span className="text-secondColor  hover:underline  hover:cursor-pointer text-[15px]">Back to Sign In</span></Link>
            </div>
          </div>
        </div>
      
    </>
  );
}
