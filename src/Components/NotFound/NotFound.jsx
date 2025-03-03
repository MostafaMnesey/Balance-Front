import React from 'react'
import { motion } from "framer-motion";
import logo from "../../assets/Images/LogoWithText.png";
export default function NotFound() {
  return <>
   <div className="flex flex-col justify-center items-center min-h-screen bg-gray-400 text-mainColor text-center">
      <motion.img
        src={logo}
        alt="Not Found"
        className=" mb-6 drop-shadow-lg"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      />
      <h1 className="text-4xl mt-16 font-bold">404</h1>
      <p className="text-lg mt-8">Page Not Found</p>
    </div>
  </>
}
