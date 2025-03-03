import React, { Component } from "react";
import Slider from "react-slick";
import avt from "../../assets/Images/Ellipse 4.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default function HomeSlide() {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className=""
        style={{
          ...style,
         
          background: "transparent",
          borderRadius: "50%",
          position: "absolute",
          width: "40px",
          height: "40px",
          left: "-3%",
          top: "48%",
          cursor: "pointer",
          zIndex: 1,
          opacity: 0.8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClick}
      >
        <FaChevronLeft color="white" size={60} />
      </div>
    );
  };

  // السهم الأيمن
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className=""
        style={{
          ...style,
       
          background: "transparent",
          borderRadius: "",
          position: "absolute",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          right: "-3%",
          top: "48%",
          zIndex: 1,
          opacity: 0.8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
        onClick={onClick}
      >
        <FaChevronRight color="white" size={60} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: true, 
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="">
          <div className="  px-6 py-4 mx-3 mb-5 md:mb-0 bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className=" flex items-center  flex-col lg:flex-row justify-between">
              <img src={avt} alt="" />
              <p className="text-secondColor  text-[20px] 2xl:me-28 font-roboto font-medium">
                Rising_Phoenix
              </p>
              <div className=" flex justify-center items-center ">
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
              </div>
            </div>
            <p className="md:ms-16 text-secondColor text-[20px] font-roboto font-normal">
              “I used to feel stuck, but this app gave me structure and a real
              connection with my doctor. It changed everything for me.”
            </p>
            <div className="flex justify-end pt-5">
              <span className="text-secondColor text-[20px] font-roboto font-normal">
                10/2/2024
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="  px-6 py-4 mx-3 mb-5 md:mb-0 bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className=" flex items-center  flex-col lg:flex-row justify-between">
              <img src={avt} alt="" />
              <p className="text-secondColor  text-[20px] 2xl:me-28 font-roboto font-medium">
                Rising_Phoenix
              </p>
              <div className=" flex justify-center items-center ">
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
              </div>
            </div>
            <p className="md:ms-16 text-secondColor text-[20px] font-roboto font-normal">
              “I used to feel stuck, but this app gave me structure and a real
              connection with my doctor. It changed everything for me.”
            </p>
            <div className="flex justify-end pt-5">
              <span className="text-secondColor text-[20px] font-roboto font-normal">
                10/2/2024
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="  px-6 py-4 mx-3 mb-5 md:mb-0 bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className=" flex items-center  flex-col lg:flex-row justify-between">
              <img src={avt} alt="" />
              <p className="text-secondColor  text-[20px] 2xl:me-28 font-roboto font-medium">
                Rising_Phoenix
              </p>
              <div className=" flex justify-center items-center ">
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
              </div>
            </div>
            <p className="md:ms-16 text-secondColor text-[20px] font-roboto font-normal">
              “I used to feel stuck, but this app gave me structure and a real
              connection with my doctor. It changed everything for me.”
            </p>
            <div className="flex justify-end pt-5">
              <span className="text-secondColor text-[20px] font-roboto font-normal">
                10/2/2024
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="  px-6 py-4 mx-3 mb-5 md:mb-0 bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className=" flex items-center  flex-col lg:flex-row justify-between">
              <img src={avt} alt="" />
              <p className="text-secondColor  text-[20px] 2xl:me-28 font-roboto font-medium">
                Rising_Phoenix
              </p>
              <div className=" flex justify-center items-center ">
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
              </div>
            </div>
            <p className="md:ms-16 text-secondColor text-[20px] font-roboto font-normal">
              “I used to feel stuck, but this app gave me structure and a real
              connection with my doctor. It changed everything for me.”
            </p>
            <div className="flex justify-end pt-5">
              <span className="text-secondColor text-[20px] font-roboto font-normal">
                10/2/2024
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="  px-6 py-4 mx-3 mb-5 md:mb-0 bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className=" flex items-center  flex-col lg:flex-row justify-between">
              <img src={avt} alt="" />
              <p className="text-secondColor  text-[20px] 2xl:me-28 font-roboto font-medium">
                Rising_Phoenix
              </p>
              <div className=" flex justify-center items-center ">
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
              </div>
            </div>
            <p className="md:ms-16 text-secondColor text-[20px] font-roboto font-normal">
              “I used to feel stuck, but this app gave me structure and a real
              connection with my doctor. It changed everything for me.”
            </p>
            <div className="flex justify-end pt-5">
              <span className="text-secondColor text-[20px] font-roboto font-normal">
                10/2/2024
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="  px-6 py-4 mx-3 mb-5 md:mb-0 bg-gray-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className=" flex items-center  flex-col lg:flex-row justify-between">
              <img src={avt} alt="" />
              <p className="text-secondColor  text-[20px] 2xl:me-28 font-roboto font-medium">
                Rising_Phoenix
              </p>
              <div className=" flex justify-center items-center ">
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
                <i className="fa-solid fa-star text-mainColor"></i>
              </div>
            </div>
            <p className="md:ms-16 text-secondColor text-[20px] font-roboto font-normal">
              “I used to feel stuck, but this app gave me structure and a real
              connection with my doctor. It changed everything for me.”
            </p>
            <div className="flex justify-end pt-5">
              <span className="text-secondColor text-[20px] font-roboto font-normal">
                10/2/2024
              </span>
            </div>
          </div>
        </div>
       
      
      </Slider>
    </div>
  );
}
