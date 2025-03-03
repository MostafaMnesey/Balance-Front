import React from "react";
import img1 from "../../../assets/Images/Ellipse 1.png";
import img2 from "../../../assets/Images/Ellipse 2 .png";
import HomeSlider from "../../Slider/HomeSlider";
import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      <div className="min-h-[80vh] mt-16 bg-mainColor">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" ms-8 md:ms-0  flex flex-col justify-center ">
              <h1 className="text-[48px] xl:pe-36 mt-3 md:mt-0  text-white font-roboto font-bold">
                Support Recovery, Transform Lives
              </h1>
              <p
                className="text-white text-[18px] my-5
               md:mx-0 md:pe-0 xl:pe-60 font-normal font-roboto"
              >
                Join a platform designed for healthcare professionals to connect
                with patients, track progress, and provide expert guidance in
                overcoming drug addiction.
              </p>
              <Link to="/SignUp">
                <button className=" w-3/4 md:w-full lg:w-3/4 self-center mx-10 md:mx-0 md:self-start bg-secondColor py-5 rounded-lg text-white font-medium hover:bg-white hover:text-mainColor transition-all text-[18px]">
                  Join as a Specialist
                </button>
              </Link>
              <p className="text-white text-[18px] my-5 xl:pe-60 md:pe-28 font-medium  text-nowrap   text-center underline font-roboto">
                learn more
              </p>
            </div>
            <div className="flex h-full md:mt-9 mb-10 md:mb-0 items-center  justify-center">
              <img src={img1} className="lg:w-3/4 " alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[50vh] bg-white">
        <div className="container mx-auto">
          <h2 className="text-[25px] my-8 mx-2 md:ms-0  text-secondColor font-roboto font-bold">
            Our Powerful Tools for Effective Addiction Treatment
          </h2>
          <section className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondColor group/card hover:bg-mainColor transition-all text-white p-6 rounded-2xl shadow-lg flex flex-col items-start">
                <div className="bg-mainColor group-hover/card:bg-secondColor transition-all w-14 h-14 flex items-center justify-center p-2 rounded-full">
                  <span className="text-3xl">
                    <i className="fa-solid fa-display"></i>
                  </span>
                </div>
                <h3 className="font-bold text-lg mt-4">
                  Easy-to-Use Interface
                </h3>
                <p className="text-sm mt-2">
                  Simple, intuitive design for effortless navigation and
                  workflow.
                </p>
              </div>

              <div className="bg-mainColor group/card transition-all hover:bg-secondColor text-white p-6 rounded-2xl shadow-lg flex flex-col items-start">
                <div className="bg-secondColor group-hover/card:bg-mainColor transition-all w-14 h-14 flex items-center justify-center p-2 rounded-full">
                  <span className="text-3xl">
                    <i className="fa-solid fa-lightbulb"></i>
                  </span>
                </div>
                <h3 className="font-bold text-lg mt-4">
                  Effortless Daily Tips
                </h3>
                <p className="text-sm mt-2">
                  Schedule and automate motivational tips for all patients.
                </p>
              </div>

              <div className="bg-secondColor  group/card hover:bg-mainColor transition-all text-white p-6 rounded-2xl shadow-lg flex flex-col items-start">
                <div className="bg-mainColor  group-hover/card:bg-secondColor transition-all w-14 h-14 flex items-center justify-center p-2 rounded-full">
                  <span className="text-3xl">
                    <i className="fa-regular fa-square-check"></i>
                  </span>
                </div>
                <h3 className="font-bold text-lg mt-4">
                  Task Assignment & Follow-Up
                </h3>
                <p className="text-sm mt-2">
                  Assign tasks and track recovery progress with follow-up forms.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 place-items-center mt-6">
              <div className="bg-white  group/card hover:bg-[#ABABAB] transition-all lg:ms-16 text-secondColor p-6 rounded-2xl shadow-lg flex flex-col items-start w-full md:w-3/4">
                <div className="bg-[#ABABAB] group-hover/card:bg-white transition-all w-14 h-14 flex items-center justify-center p-2 rounded-full">
                  <span className="text-3xl">
                    <i className="fa-solid fa-comments"></i>
                  </span>
                </div>
                <h3 className="font-bold text-lg mt-4">
                  Real-Time Chat Support
                </h3>
                <p className="text-sm mt-2">
                  Secure messaging with instant alerts for new messages.
                </p>
              </div>

              <div className="bg-[#E0E0E0] group/card hover:bg-secondColor transition-all lg:me-20 text-secondColor p-6 rounded-2xl shadow-lg flex flex-col items-start w-full md:w-3/4">
                <div className="bg-secondColor  group-hover/card:bg-[#E0E0E0]   transition-all w-14 h-14 flex items-center justify-center p-2 rounded-full ">
                  <span className="text-3xl">
                    <i className="fa-regular  fa-chart-bar text-white transform rotate-[270deg]  origin-center "></i>
                  </span>
                </div>
                <h3 className="font-bold text-lg transition-all group-hover/card:text-white mt-4">
                  Insightful Analytics & Dashboard
                </h3>
                <p className="text-sm transition-all group-hover/card:text-white mt-2">
                  Track patient engagement and optimize treatment plans.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="min-h-[50vh] overflow-hidden bg-thirdColor">
        <div className="container  mx-auto">
          <div className="pt-2">
            <h3 className="text-[25px] mt-10 pt-1 mx-2 md:ms-0  text-secondColor font-roboto font-bold">
              Real Stories, Real Progress
            </h3>
          </div>
          <div className="md:my-8 w-full  mx-auto">
            <HomeSlider />
          </div>
        </div>
      </div> 

      <div className="min-h-[80vh]">
        <div className="container mx-auto">
          <h4 className="text-[30px] text-secondColor font-medium text-center my-20">
            How It Works: Supporting Recovery, Step by Step
          </h4>
          <div className=" ">
            <Slide direction="right" cascade triggerOnce>
              <div className="grid grid-cols-1 md:grid-cols-4 my-14 h">
                <div className="md:col-span-3">
                  <div className="flex justify-center items-center">
                    <div className="lg:flex hidden  justify-center items-center  md:w-24 md:h-24 rounded-full bg-mainColor">
                      <span className="text-white text-[30px] font-semibold">
                        1
                      </span>
                    </div>
                    <div className=" flex flex-col ms-4">
                      <span className="text-[25px] font-medium text-secondColor">
                        Sign In & Get Started
                      </span>
                      <p className="text-[16px] my-3 font-normal text-secondColor">
                        Welcome abroad! Just sign in with your email, and your
                        personalized dashboard is ready - no setup needed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 hidden md:block w-full bg-thirdColor h-full rounded-s-full"></div>
              </div>
            </Slide>
            <Slide direction="left" cascade triggerOnce>
              {" "}
              <div className="grid grid-cols-2 md:grid-cols-4 my-14">
                <div className="col-span-1 hidden md:block w-full bg-thirdColor h-full rounded-e-full"></div>

                <div className="col-span-3">
                  <div className="flex justify-start items-center mx-10">
                    <div className="lg:flex hidden  justify-center items-center  md:w-24 md:h-24 rounded-full bg-mainColor">
                      <span className="text-white text-[30px] font-semibold">
                        2
                      </span>
                    </div>
                    <div className=" flex flex-col ms-4">
                      <span className="text-[25px] font-medium text-secondColor">
                        Meet Your Patients
                      </span>
                      <p className="text-[16px] my-3 font-normal text-secondColor">
                        See all your patients in one place, each with a unique
                        nickname and avatar for privacy. Quickly check their
                        progress, recent activity, <br /> and support needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide direction="right" cascade triggerOnce>    <div className="grid grid-cols-2 md:grid-cols-4 my-14">
              <div className="col-span-3">
                <div className="flex justify-center items-center">
                  <div className="lg:flex hidden  justify-center items-center  md:w-24 md:h-24 rounded-full bg-mainColor">
                    <span className="text-white text-[30px] font-semibold">
                      3
                    </span>
                  </div>
                  <div className=" flex flex-col ms-4">
                    <span className="text-[25px] font-medium text-secondColor">
                      Guide Their Recovery
                    </span>
                    <p className="text-[16px] my-3 font-normal text-secondColor">
                      Assign daily tasks, set up check-ins, and create
                      assessments to keep patients on track. Everything is
                      structured, <br /> simple, and sent directly to their app.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 hidden md:block w-full bg-thirdColor h-full rounded-s-full"></div>
            </div>
            </Slide>
            <Slide direction="left" cascade triggerOnce>
            <div className="grid grid-cols-2 md:grid-cols-4">
              <div className="col-span-1 hidden md:block w-full bg-thirdColor h-full rounded-e-full"></div>

              <div className="col-span-3">
                <div className="flex justify-start items-center mx-10">
                  <div className="lg:flex hidden  justify-center items-center  md:w-24 md:h-24 rounded-full bg-mainColor">
                    <span className="text-white text-[30px] font-semibold">
                      4
                    </span>
                  </div>
                  <div className=" flex flex-col ms-4">
                    <span className="text-[25px] font-medium text-secondColor">
                      Stay Connected
                    </span>
                    <p className="text-[16px] my-3 font-normal text-secondColor">
                      Chat securely with patients to answer their questions and
                      offer encouragement. Get notified about urgent updates so
                      you’re always in the loop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </Slide>
            <Slide direction="right" cascade triggerOnce>
            <div className="grid grid-cols-2 md:grid-cols-4 my-14">
              <div className="col-span-3">
                <div className="flex justify-center items-center">
                  <div className="lg:flex hidden  justify-center items-center  md:w-24 md:h-24 rounded-full bg-mainColor">
                    <span className="text-white text-[30px] font-semibold">
                      5
                    </span>
                  </div>
                  <div className=" flex flex-col ms-4">
                    <span className="text-[25px] font-medium text-secondColor">
                      Track & Adjust
                    </span>
                    <p className="text-[16px] my-3 font-normal text-secondColor">
                      Monitor progress, review reports, and fine-tune treatment
                      plans <br /> all in one intuitive system designed to make
                      your job easier and more impactful.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 hidden md:block w-full bg-thirdColor h-full rounded-s-full"></div>
            </div>
            </Slide>
            <p className="text-[24px] text-secondColor font-medium text-center my-10">With Balance, you focus on what truly matters: helping patients reclaim their lives.</p>

          </div>
        </div>
      </div> 
      <div className="min-h-[80vh]  bg-mainColor">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex h-full md:mt-9 mb-8 md:mb-0 items-center  justify-center">
              <img src={img2} className="lg:w-3/4 " alt="" />
            </div>
            <div className=" ms-8 md:ms-0  flex flex-col justify-center ">
              <h1 className="text-[48px] xl:pe-36 mt-3 md:mt-0  text-white font-roboto font-bold">
                Join Balance - Make Recovery Seamless
              </h1>
              <p
                className="text-white text-[18px] my-5
               md:mx-0 md:pe-0 xl:pe-56 font-normal font-roboto"
              >
                Focus on patient care while Balance takes care of the rest.
                Secure, smart, designed for addiction specialists.
              </p>
              <Link to="/SignUp">
                <button className=" w-3/4 md:w-full lg:w-3/4 self-center mx-10 md:mx-0 md:self-start bg-secondColor py-5 rounded-lg text-white font-medium hover:bg-white hover:text-mainColor transition-all text-[18px]">
                  Get Started Now
                </button>
              </Link>
              <p className="text-white text-[18px] my-5 xl:pe-60 md:pe-28 font-medium  text-nowrap   text-center underline font-roboto">
                More Information
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
