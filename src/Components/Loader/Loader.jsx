import React from 'react'
import { motion } from "framer-motion";
import logo from "../../assets/Images/Logo.png";
export default function Loader() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-white">
      <motion.img
        src={logo}
        alt="Loading..."
        className=""
        animate={{ rotate: 360 }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
      />
    </div>
    
    </>
  )
}
