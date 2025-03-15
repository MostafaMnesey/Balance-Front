import React from "react";
import logo from "../../../assets/Images/LogoWithText.png";
export default function Footer() {
  return (
    <footer className="bg-secondColor dark:bg-gray-900">
      <div className="container mx-auto">
        <div className=" grid grid-cols-2 lg:grid-cols-5 gap-5 py-8 px-4 mx-auto max-w-screen-xl text-sm text-gray-500 dark:text-gray-400  ">
          <div className="col-span-2 flex justify-center flex-col">
            <img src={logo} className="h-[48px] w-[173px]" alt="Balance Logo" />
            <p className="mt-6 pe-40 text-white text-[15px] font-roboto dark:text-gray-400">
              Supporting healthcare professionals in guiding patients toward
              recovery.
            </p>
          </div>
          <div className="">
            <p className="text-mainColor text-[15px] font-roboto font-semibold">
              Navigation
            </p>
            <ul className="flex justify-center flex-col">
              <li className="my-1 text-white text-md font-medium">Home</li>
              <li className="my-1 text-white text-md font-medium">About</li>
              <li className="my-1 text-white text-md font-medium">Features</li>
              <li className="my-1 text-white text-md font-medium">Contact</li>
            </ul>
          </div>
          <div className="">
            <p className="text-mainColor text-[15px] font-roboto font-semibold">
              Quick Links
            </p>
            <ul className="flex justify-center flex-col">
              <li className="my-1 text-white text-base font-medium  ">Privacy Policy</li>
              <li className="my-1 text-white text-base font-medium ">Terms of Use</li>
              <li className="my-1 text-white text-base  font-medium">FAQ</li>
            </ul>
          </div>
          <div className="">
            <p className="text-mainColor text-[15px] font-roboto font-semibold">
              Contact Info
            </p>
            <ul className="flex justify-center flex-col">
              <li className="my-1 text-white text-base  ">
                <div className="flex justify-start items-center">
                  <div className="h-6 w-6 flex justify-center me-2 p-3 items-center rounded-full bg-white   ">
                    <i className="fa-solid fa-phone-volume text-mainColor"></i>
                  </div>
                  <p className="font-medium text-nowrap">+20 10 1234 5678</p>
                </div>
              </li>
              <li className="my-2 text-white text-base  ">
                <div className="flex justify-start items-center">
                  <div className="h-6 w-6 flex p-3 justify-center me-2 items-center rounded-full bg-white   ">
                    <i className="fa-solid fa-envelope text-mainColor"></i>
                   
                  </div>
                  <p className="font-medium">Balance@gmail.com</p>
                </div>
              </li>
              <li className="my-2 text-white text-base  ">
                <div className="flex justify-start items-center">
                  <div className="h-6 w-6 flex justify-center me-2 items-center rounded-full bg-white   ">
                    <i className="fa-solid fa-location-dot text-mainColor"></i>
                    
                  </div>
                  <p className="font-medium">Location</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
