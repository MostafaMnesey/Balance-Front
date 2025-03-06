import React, { useState } from "react";

export default function SideBar({ component }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            items-center p-2 mt-2  text-sm text-gray-500 rounded-lg hover:bg-gray-100 
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
            className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-gray-50 dark:bg-gray-800 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            aria-label="Sidebar"
          >
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              type="button"
              className={`
            ${
              isSidebarOpen ? `ms-48 block ` : `hidden`
            }  items-center p-2 mt-2  text-sm text-gray-500 rounded-lg hover:bg-gray-100 
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
            <div className="h-full px-3 py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Kanban
                    </span>
                    <span
                      className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 
                  bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >
                      Pro
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Content Area */}
          <div className={`p-4 ${isSidebarOpen ? "ml-64" : "ml-10"}`}>
           <div className="container mx-auto"> {component}</div>
          </div>
        </div>
      </>
    </>
  );
}
