import React, { useState } from "react";

export default function SideBar({ component }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <>
        <div>
          {/* Sidebar Toggle Button */}
          {!isSidebarOpen ? (
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              type="button"
              className={`
            flex justify-end p-2 mt-2  text-sm text-gray-500 rounded-lg  hover:bg-mainColor
            focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
            dark:focus:ring-gray-600
            `}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
              </svg>
            </button>
          ) : null}

          {/* Sidebar */}
          <aside
            id="default-sidebar"
            className={`fixed top-0 left-0 z-40 w-2/12 h-[91vh] mt-20 transition-transform bg-mainColor rounded-r-2xl dark:bg-gray-800 
                flex-flex-col  
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            aria-label="Sidebar"
          >
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              type="button"
              className={`
            ${
              isSidebarOpen ? `ms-52 flex justify-center ` : `hidden`
            }  items-end p-2 mt-2  text-sm text-gray-500 rounded-lg  
            focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 
            dark:focus:ring-gray-600
            `}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
              </svg>
            </button>
            <div className="h-full px-3 py-4 ">
              <ul className="space-y-2 font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex justify-between"> <i class="fa-solid fa-grip text-xl"></i><span className="ms-3 mx-5">Dashboard</span></div>
                  </a>
                </li>
              
              </ul>
              <div className="place-content-end">bg</div>
            </div>
            
          </aside>

          {/* Content Area */}
          <div className={`p-4 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
           <div className="container mx-auto"> {component}</div>
          </div>
        </div>
      </>
    </>
  );
}
