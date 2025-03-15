import React from "react";
import logo from "../../../assets/Images/LogoWithBlack.png";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
export default function SignIn() {
  const [password, setPassword] = useState(false);
  return (
    <>
      <div className="min-h-[50vh] bg-white">

            <div className=" flex w-1/4 my-5 md:mx-9 justify-start items-center">
              <Link to='/'>
                     <img src={logo} alt="" />
            
                   </Link> 
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 order-last md:order-first bg-white">
            <div className=" md:flex flex-col mt-24  justify-center   xl:mx-60  min-h-[50vh]">
              <div className=" ms-10 md:ms-0">
                <h1 className="text-4xl font-bold font-roboto text-secondColor">
                  Welcome Back, Doctor!
                </h1>
                <p className="text-[15px] font-roboto text-secondColor">
                  Sign in to manage patients, track progress, and support
                  recovery.
                </p>
              </div>
              <div className="form ms-20 md:ms-0 ">
                <div className="grid grid-cols-1  ">
                  <div className=" my-8  ">
                    <label
                      htmlFor="Email"
                      className="block mb-2  mx-3 md:mx-0 text-[15px] font-medium text-secondColor font-roboto  dark:text-white"
                    >
                      <div className="flex justify-start items-center">
                        <i className="fa-solid fa-envelope mx-3"></i>
                        <p>Email</p>
                      </div>
                    </label>
                    <input
                      type="text"
                      id="Email"
                      placeholder="Email"
                      className=" w-3/4 place-self-center md:w-3/4 placeholder:text-[#B0B0B0] placeholder-opacity-50 shadow-md     p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className=" mt-4">
                    <label
                      htmlFor="Password"
                      className="block mb-2  mx-3 md:mx-0   text-[15px] font-medium text-secondColor font-roboto  dark:text-white"
                    >
                      <div className="flex justify-start items-center">
                        <i className="fa-solid fa-lock mx-3"></i>
                        <p>Password</p>
                      </div>
                    </label>
                    <div className="relative">
                      <input
                        type={password ? "text" : "password"}
                        id="Password"
                        placeholder="Password "
                        className=" w-3/4  place-self-center md:w-3/4 text-sm  shadow-md  placeholder:text-[#B0B0B0]   p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50    focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <button onClick={() => setPassword(!password)}>
                        {" "}
                        <i
                          className={`fa-solid ${
                            password ? "fa-eye-slash" : "fa-eye"
                          } text-secondColor absolute  top-[30%] left-[65%] sm:left-[71%]`}
                        ></i>
                      </button>
                    </div>
                    <div className=" flex md:justify-end  xs:ms-24 sm:ms-48 md:me-44 lg:me-48 xl:me-36 2xl:me-48  justify-center underline-offset-0	underline decoration-[#B0B0B0]  items-center mt-2">
                      <Link to="/ForgetPassword">

                        <p className="text-[13px] font-roboto text-[#B0B0B0] text-nowrap my-2 ">
                          Forgot Password?
                        </p>
                      </Link>
                    </div>
             <Link to='/Dashboard/patient'>   
                    <div className="flex  mt-4 mb-5">
                    <button
                    onClick={() => console.log("Sign In")}
                    className=" bg-mainColor  text-white hover:bg-secondColor w-3/4 transition-all  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                        Sign In
                      </button>
                    </div>
                      </Link> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Slide direction="right" cascade triggerOnce>
            <div className="bg-mainColor hover:bg-secondColor transition-all min-h-[88vh] rounded-b-3xl md:rounded-none md:order-last order-first md:rounded-tl-[60px] flex flex-col justify-center items-start  md:rounded-bl-[60px] col-span-1">
              <div className="ms-10">
                <h2 className="text-white text-[50px] font-roboto font-bold">
                  Guide Recovery.
                </h2>
                <h3 className="text-white text-[50px] font-roboto font-bold">
                  Make an Impact.
                </h3>
                <p className="text-white text-[18px] font-roboto font-medium xl:pe-60 ">
                  Helping patients overcome addiction starts here. Access your
                  dashboard, assign tasks, and stay connected with your patients
                  - all in one place.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
}
