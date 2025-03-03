import React, { useState } from "react";
import logo from "../../../assets/images/logoWithBlack.png";
import { Link } from "react-router-dom";
export default function ForgetPassword() {
  const [password, setPassword] = useState(false);

  return (
    <>
      <div className="min-h-[100vh] bg-white">
        <div className=" flex my-5 md:mx-9 justify-start items-center">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex flex-col min-h-[70vh] justify-center items-center">
          <div className="grid grid-cols-1">
            <div className="mt-10 ">
              <h1 className="text-4xl mx-5 md:mx-0 text-secondColor font-bold">
                Time for a Fresh Start!
              </h1>
              <p className="text-[15px]  mx-5 md:mx-0  text-secondColor my-2 leading-relaxed	whitespace-pre-line	">
                Enter your new password below and get back to guiding your
                patients
                 toward recovery.
              </p>
            </div>

            <div className="my-8 text-center w-full md:w-full">
              <label
                htmlFor="small-input"
                className="block mb-2  mx-1 md:mx-0   text-[15px] font-medium text-secondColor font-roboto  dark:text-white"
              >
                <div className="flex justify-start items-center">
                  <i className="fa-solid fa-lock mx-3"></i>
                  <p>Password</p>
                </div>
              </label>
              <div className="relative">
                <input
                  type={password ? "text" : "password"}
                  id="small-input"
                  placeholder="Password "
                  className=" w-10/12  place-self-center md:w-full text-sm  shadow-md  placeholder:text-[#B0B0B0]   p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50    focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button onClick={() => setPassword(!password)}>
                  {" "}
                  <i
                    className={`fa-solid ${
                      password ? "fa-eye-slash" : "fa-eye"
                    } text-secondColor absolute  top-[30%] md:left-[93%] left-[81%]`}
                  ></i>
                </button>
              </div>
            </div>
            <div className="my-8 text-center w-full md:w-full">
              <label
                htmlFor="small-input"
                className="block mb-2  mx-1 md:mx-0   text-[15px] font-medium text-secondColor font-roboto  dark:text-white"
              >
                <div className="flex justify-start items-center">
                  <i className="fa-solid fa-lock mx-3"></i>
                  <p>Confirm New Password</p>
                </div>
              </label>
              <div className="relative">
                <input
                  type={password ? "text" : "password"}
                  id="small-input"
                  placeholder="Confirm Password "
                  className=" w-10/12  place-self-center md:w-full text-sm  shadow-md  placeholder:text-[#B0B0B0]   p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50    focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button onClick={() => setPassword(!password)}>
                  {" "}
                  <i
                    className={`fa-solid ${
                      password ? "fa-eye-slash" : "fa-eye"
                    } text-secondColor absolute  top-[30%] md:left-[93%] left-[81%]`}
                  ></i>
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col gap-5">
              <button className="bg-mainColor hover:bg-secondColor transition-all w-3/4 md:w-full font-medium text-white px-4 py-2 rounded-lg">
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
