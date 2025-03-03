import React from "react";
import { Link } from "react-scroll";
export default function Features() {
  return (
    <div>
      <div className=" min-h-[30vh]   ">
        <div className="bg-mainColor mt-16 py-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
              <Link
                to="Sleek & Intuitive Interface"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                <div className="w-56 h-56   place-self-center hover:bg-white group/hover   bg-secondColor transition-all rounded-full mx-auto  flex flex-col items-center justify-center">
                  <i className="fa-solid fa-display group-hover/hover:text-secondColor text-white text-8xl"></i>
                  <h3 className="font-bold text-white group-hover/hover:text-secondColor text-lg mt-4">
                    Easy-to-Use
                  </h3>
                </div>
              </Link>
              <Link
                to="Motivational Daily Boosts"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                
                <div className="w-56 h-56 group/hover hover:bg-white  transition-all  bg-secondColor rounded-full mx-auto  flex flex-col items-center justify-center">
                  <i className="fa-solid group-hover/hover:text-secondColor fa-lightbulb text-white text-8xl"></i>
                  <h3 className="font-bold group-hover/hover:text-secondColor text-white text-lg mt-4">
                    Daily Tips
                  </h3>
                </div>
              </Link>
              <Link
                to="Streamlined Task & Follow-Up Management"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                <div className="w-56 h-56  group/hover  bg-secondColor  transition-all hover:bg-white rounded-full mx-auto  flex flex-col items-center justify-center">
                  <i className="fa-solid fa-square-check group-hover/hover:text-secondColor text-white text-8xl"></i>
                  <h3 className="font-bold group-hover/hover:text-secondColor text-white text-lg mt-4">
                    Task & Follow-Up
                  </h3>
                </div>
              </Link>
              <Link
                to="Instant & Secure Messaging"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                <div className="w-56 h-56  group/hover hover:bg-white  transition-all   bg-secondColor rounded-full mx-auto  flex flex-col items-center justify-center">
                  <i className="fa-solid group-hover/hover:text-secondColor fa-comments text-white text-8xl"></i>
                  <h3 className="font-bold group-hover/hover:text-secondColor text-white text-lg mt-4">
                    Chat Support
                  </h3>
                </div>
              </Link>
              <Link
                to="Smart Insights & Dynamic Dashboard"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                <div className="w-56 h-56  group/hover hover:bg-white  transition-all   bg-secondColor rounded-full mx-auto  flex flex-col items-center justify-center">
                  <i className="fa-regular group-hover/hover:text-secondColor   fa-chart-bar text-white transform rotate-[270deg] text-8xl  origin-center "></i>
                  <h3 className="font-bold group-hover/hover:text-secondColor text-white text-lg mt-4">
                    Insights
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container my-5 mx-auto">
          <div className="grid grid-cols-1">
            <div
              id="Sleek & Intuitive Interface"
              className=" text-secondColor p-4  "
            >
              <span className="font-bold text-start text-3xl">
                Sleek & Intuitive Interface
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-6">
                <div className="">
                  <p className="lg:pe-28 text-[18px] font-medium font-roboto">
                    Our platform features a sleek and intuitive interface that
                    transforms everyday tasks into effortless actions. Designed
                    with a minimalist aesthetic, every element—from navigation
                    menus to patient details—is carefully arranged to ensure a
                    smooth, distraction-free workflow. This simplicity empowers
                    you to focus on delivering exceptional care rather than
                    wrestling with complex software.
                  </p>
                </div>
                <div className="">
                  <p className="text-[18px] lg:pe-28 font-medium font-roboto">
                    Beyond its clean design, our interface offers smart cues and
                    responsive elements that adapt to your needs. Whether you're
                    accessing patient records, scheduling daily tips, or
                    tracking progress, each interaction is crafted to be quick
                    and intuitive. The result is a user experience that not only
                    saves time but also builds confidence, letting you manage
                    your practice with ease and precision.
                  </p>
                </div>
              </div>
            </div>
            <div id="Motivational Daily Boosts" className=" text-secondColor my-16 p-4 ">
              <span className="font-bold text-start text-3xl">
                Motivational Daily Boosts
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-6">
                <div className="">
                  <p className="lg:pe-28 text-[18px] font-medium font-roboto">
                    Elevate patient engagement with our motivational daily
                    boosts—a feature that lets you effortlessly schedule and
                    automate personalized tips. With the ability to bulk add
                    multiple tips at once, you can ensure that every patient
                    receives a daily dose of encouragement precisely when they
                    need it. This continuous flow of inspiration reinforces
                    positive habits and supports ongoing recovery.
                  </p>
                </div>
                <div className="">
                  <p className="text-[18px] lg:pe-28 font-medium font-roboto">
                    Our system automatically handles the display schedule, so
                    each tip is delivered on its designated day across all
                    patient devices. This seamless automation frees you from
                    daily manual updates, allowing you to maintain consistent,
                    impactful communication. By keeping the motivational
                    momentum alive, you help create a supportive environment
                    that drives lasting change.
                  </p>
                </div>
              </div>
            </div>
            <div id="Streamlined Task & Follow-Up Management" className=" text-secondColor my-16 p-4 ">
              <span className="font-bold text-start text-3xl">
                Streamlined Task & Follow-Up Management
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-6">
                <div className="">
                  <p className="lg:pe-28 text-[18px] font-medium font-roboto">
                    Take control of your patient care with our streamlined task
                    and follow-up management feature. Assign personalized
                    recovery tasks with ease and monitor progress through a
                    clear, visually appealing interface. This tool not only
                    helps you track completed tasks but also highlights pending
                    actions, ensuring that no detail slips through the cracks.
                  </p>
                </div>
                <div className="">
                  <p className="text-[18px] lg:pe-28  font-medium font-roboto">
                    Complementing task assignment is our integrated follow-up
                    system, which uses structured forms to capture patient
                    feedback and progress. These follow-ups provide deep
                    insights into each patient’s journey, allowing you to adjust
                    treatment plans dynamically. Together, these tools create a
                    proactive management system that keeps every patient on
                    track and maximizes the effectiveness of your care.
                  </p>
                </div>
              </div>
            </div>
            <div id="Instant & Secure Messaging" className=" text-secondColor my-16 p-4 ">
              <span className="font-bold text-start text-3xl">
                Instant & Secure Messaging
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-6">
                <div className="">
                  <p className="lg:pe-28 text-[18px] font-medium font-roboto">
                    Stay connected with your patients in real time through our
                    instant and secure messaging system. Designed for swift
                    communication, this feature allows you to send text and
                    images instantly, ensuring that critical support is just a
                    click away. Instant alerts keep you informed of new
                    messages, so you're always ready to respond to emerging
                    needs.
                  </p>
                </div>
                <div className="">
                  <p className="text-[18px] lg:pe-28 font-medium font-roboto">
                    The messaging platform is built with top-tier security
                    protocols to protect patient confidentiality while
                    maintaining ease of use. Its streamlined design makes
                    conversations seamless, fostering a strong, trust-based
                    relationship between you and your patients. Whether it’s a
                    quick check-in or an urgent update, our chat system ensures
                    that every interaction is both prompt and private.
                  </p>
                </div>
              </div>
            </div>
            <div id="Smart Insights & Dynamic Dashboard"
             className=" text-secondColor my-16 p-4 ">
              <span className="font-bold text-start text-3xl">
                Smart Insights & Dynamic Dashboard
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-6">
                <div className="">
                  <p className="lg:pe-28 text-[18px] font-medium font-roboto">
                    Unlock the full potential of your practice with our smart
                    insights and dynamic dashboard. This feature aggregates
                    real-time data on patient engagement, task completion, and
                    overall progress, presenting it in clear, interactive
                    visualizations. With an at-a-glance view of key metrics, you
                    can quickly identify trends and areas that require immediate
                    attention.
                  </p>
                </div>
                <div className="">
                  <p className="text-[18px] lg:pe-28 font-medium font-roboto">
                    More than just numbers, our analytics empower you to make
                    data-driven decisions that refine your treatment strategies.
                    Detailed insights allow for deep dives into individual
                    performance metrics, enabling you to tailor your approach to
                    each patient’s unique needs. The dynamic dashboard
                    transforms raw data into actionable intelligence, ensuring
                    that your care is as effective and responsive as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
