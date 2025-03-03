import React from "react";
import { Slide } from "react-awesome-reveal";

import img1 from "../../../assets/Images/about1.png"; 
import img2 from "../../../assets/Images/about2.png";
import img3 from "../../../assets/Images/about3.png";

import simg1 from "../../../assets/Images/s2img1.png";
import simg2 from "../../../assets/Images/s2img2.png";
import simg3 from "../../../assets/Images/s2img3.png";
import simg4 from "../../../assets/Images/s2img4.png";

import img4 from "../../../assets/Images/Ellipse 2 .png";
export default function About() {
  return (
    <>
      <div className="min-h-[10vh] mt-16">
        <div className="container  mx-auto">
           <Slide direction="left" cascade triggerOnce>
            <div className="bg-mainColor w-[86%] rounded-e-3xl ">
              <div className="grid grid-cols-1 lg:grid-cols-4 "> 
                <div className=" my-7 mx-5 col-span-2 flex justify-center    ">
                  <img src={img1} className="w-3/5" alt="About Image" />
                </div>
                <div
                  className="flex flex-col
                justify-center 
                items-center
                col-span-2
                "
                >
                  <h1 className="text-white text-[36px]  mx-5 md:mx-0 font-roboto font-semibold text-start place-self-start">
                    Who We Are: The Heart of Balance
                  </h1>
                  <p className="text-white text-[18px] mx-5 md:mx-0 font-roboto font-medium text-start lg:pe-28  my-3">
                    Balance is a powerful tool designed for doctors treating
                    drug addiction. It simplifies patient management,
                    streamlines communication, and provides data-driven
                    insights-all while maintaining patient privacy. With
                    Balance, you can focus on what truly matters: guiding
                    patients toward recovery.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
         <Slide direction="right" cascade triggerOnce>
          <div className="bg-white w-[86%] rounded-e-3xl ">
            <div className="grid grid-cols-1 lg:grid-cols-4 ">
              <div
                className="flex flex-col
                justify-center
                items-center
                lg:ms-36
                col-span-2 my-6 
              "
              >
                <h1 className="text-secondColor text-[36px] mx-5 md:mx-0  pe-10 font-roboto font-semibold text-start place-self-start ">
                  Our Mission
                </h1>
                <p className="text-secondColor text-[18px] mx-5 md:mx-0  self-start font-roboto font-medium text-start ">
                  At Balance, we empower specialists with smart, intuitive tools
                  to guide patients through their recovery journey. By combining
                  technology with compassionate care, we make treatment more
                  effective, organized, and impactful—ensuring every patient
                  gets the support they need, every step of the way.
                </p>
              </div>
              <div className=" my-7 mx-4 col-span-2 flex justify-center">
                <img src={img2} className="w-3/5" alt="About Image" />
              </div>
            </div>
          </div>
          </Slide>
           <Slide direction="left" cascade triggerOnce>
          <div className="bg-mainColor w-[86%] rounded-e-3xl ">
            <div className="grid grid-cols-1 lg:grid-cols-4">
              <div className="my-7 mx-5 col-span-2 flex justify-center ">
                <img src={img3} className="" alt="About Image" />
              </div>
              <div
                className="flex flex-col
                justify-center 
                items-center
                col-span-2
              "
              >
                <h1 className="text-white text-[36px]  font-roboto font-semibold mx-5 md:mx-0 text-start place-self-start">
                  Our Vision
                </h1>
                <p className="text-white text-[18px] font-roboto font-medium text-start lg:pe-28 mx-5 md:mx-0 my-3">
                  A world where recovery is accessible, structured, and
                  empowering. At Balance, we envision a future where every
                  specialist has the tools to provide seamless, data-driven
                  support—helping patients reclaim their lives with
                  confidence and clarity.
                </p>
              </div>
            </div>
          </div>
          </Slide>   
        </div>
        <div className="container  mx-auto">
          <div className="bg-white min-h-[50vh] mt-10">
            <h1 className="text-center text-secondColor text-[36px] font-roboto font-medium">Why Choose Us?</h1>
         <div className="grid grid-cols-1 lg:grid-cols-1">
         <Slide direction="right" cascade triggerOnce>
             <div className="grid grid-cols-1   lg:grid-cols-4">
              <div className="flex flex-col my-10 justify-center items-center">
                <img src={simg1} className="w-5/12" alt="About Image" />
              </div>
              <div className=" flex my-10 mx-3 md:mx-0 flex-col justify-center items-start col-span-2"> 
                <h2 className="text-secondColor text-[30px] font-roboto font-medium">Designed for Specialists</h2>
                <p>
                Created specifically for doctors supporting addiction recovery.</p>
              </div>
               
            </div>
            </Slide>
            <Slide direction="left" cascade triggerOnce>
            <div className="grid grid-cols-1 lg:grid-cols-4">
              <div className=""></div>
             
              <div className=" flex flex-col mx-3 md:mx-0 my-10 justify-center items-start col-span-2 lg:ms-80"> 
                <h2 className="text-secondColor text-[30px] font-roboto font-medium">Data-Driven Insights</h2>
                <p>
                Smart analytics help improve treatment efficiency.</p>
              </div>
              <div className="flex flex-col my-10 justify-center items-center">
                <img src={simg2} className="w-5/12" alt="About Image" />
              </div>
               
            </div></Slide>
            <Slide direction="right" cascade triggerOnce>
            <div className="grid grid-cols-1 lg:grid-cols-4">
              <div className="flex my-10 flex-col justify-center items-center">
                <img src={simg3} className="w-5/12" alt="About Image" />
              </div>
              <div className=" flex flex-col mx-3 md:mx-0 my-10 justify-center items-start col-span-2"> 
                <h2 className="text-secondColor text-[30px] font-roboto font-medium">Secure & Confidential</h2>
                <p>
                Privacy-focused communication and record-keeping.</p>
              </div>
               
            </div>
            </Slide>
            <Slide direction="left" cascade triggerOnce>
            <div className="grid grid-cols-1   lg:grid-cols-4">
              <div className=""></div>
             
              <div className=" flex flex-col mx-3 md:mx-0 my-10 justify-center items-start col-span-2 lg:ms-80"> 
                <h2 className="text-secondColor text-center text-[30px] font-roboto font-medium">Data-Driven Insights</h2>
                <p>
                Smart analytics help improve treatment efficiency.</p>
              </div>
              <div className="flex my-10 flex-col justify-center items-center">
                <img src={simg4} className="w-5/12" alt="About Image" />
              </div>
               
            </div>
            </Slide>
         </div>
          </div>

        </div>
         <div className="min-h-[80vh]  bg-mainColor">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex h-full md:mt-9 mb-8 md:mb-0 items-center  justify-center">
              <img src={img4} className="lg:w-3/4 " alt="" />
            </div>
            <div className=" ms-8 md:ms-0  flex flex-col justify-center ">
              <h1 className="text-[48px] xl:pe-36 mt-3 md:mt-0  text-white font-roboto font-bold">
              Join Balance - Make Recovery Seamless
              </h1>
              <p
                className="text-white text-[18px] my-5
               md:mx-0 md:pe-0 xl:pe-56 font-normal font-roboto"
              >
                Focus on patient care while Balance takes care of the rest. Secure, smart, designed for addiction specialists.
              </p>
              <button className=" w-3/4 md:w-full lg:w-3/4 self-center mx-10 md:mx-0 md:self-start bg-secondColor py-5 rounded-lg text-white font-medium hover:bg-white hover:text-mainColor transition-all text-[18px]">
                Get Started Now
              </button>
              <p className="text-white text-[18px] my-5 xl:pe-60 md:pe-28 font-medium  text-nowrap   text-center underline font-roboto">
              More Information
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
