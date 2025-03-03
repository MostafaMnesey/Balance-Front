import React from "react";

export default function SignUp() {
  return (
    <div className="">
      <div className="bg-mainColor mt-16 py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 ">
            <div className="">
              <h1 className="text-[48px] font-semibold font-roboto text-white text-start">
                Join Balance: Empower Lives, Transform Recovery
              </h1>
              <p className="text-white text-[18px] font-normal font-roboto lg:pe-60 my-5">
                Be part of a network of dedicated specialists making a real
                difference in addiction recovery. At Balance, we provide you
                with smart tools to manage patients efficiently, track progress,
                and offer the best care - all while maintaining privacy and
                security. Apply now to join our mission and help patients
                reclaim their lives with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="form min-h-[20vh] my-10 bg-white">
          <div className="container mx-auto ">
            <form action="" className="mb-20">
              <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-12 lg:gap-28">
                <div>
                  <label
                    htmlFor="small-input"
                    className="block mb-2 mx-3 md:mx-0 text-[15px] font-medium text-secondColor font-roboto  dark:text-white"
                  >
                    Frist Name
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    className="block w-11/12 place-self-center md:w-full shadow-xl p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="  rounded-lg ">
                  <label
                    htmlFor="small-input"
                    className="block mb-2  mx-3 md:mx-0 text-[15px] font-medium text-secondColor font-roboto  dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    className="block w-11/12 place-self-center md:w-full shadow-xl  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-12 lg:gap-28">
                <div>
                  <label
                    htmlFor="small-input"
                    className="block mb-2 mx-3 md:mx-0 text-[15px] font-medium text-secondColor font-roboto  dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    className="block w-11/12 place-self-center md:w-full shadow-xl p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="small-input"
                    className="block mb-2 mx-3 md:mx-0 text-[15px] font-medium text-secondColor font-roboto  dark:text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    className="block w-11/12 place-self-center md:w-full shadow-xl p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <label
                for="message"
                className="block mb-2 text-sm font-medium mx-3 md:mx-0 text-secondColor font-roboto dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block max-h-52  min-h-36 shadow-xl w-11/12 place-self-center md:w-full  text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your Message"
              ></textarea>
              <button  className=" block w-11/12 place-self-center md:w-full mt-5 border-2 border-transparent hover:border-mainColor bg-mainColor px-5 py-2 rounded-lg text-white hover:bg-white hover:text-mainColor transition-all">Send</button>
            </form>
          </div>
        </div>  
    </div>
  );
}
