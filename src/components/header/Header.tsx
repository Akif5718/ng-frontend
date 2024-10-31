// app/components/Header.tsx
"use client";

import React, { useState } from "react";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleNavItemClick = () => {
    setOpen(false); // Close main menu
    closeDropdown(); // Close dropdown if open
  };

  return (
    <header className="sticky top-0 z-10 bg-[#0F172B] text-white shadow">
      <div className="antialiased">
        <div className="w-full">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <a
                href="#"
                className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
              >
                Flowtrail UI
              </a>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setOpen(!open)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6 text-white"
                >
                  <path
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    className={`${open ? "hidden" : "block"}`}
                  ></path>
                  <path
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    className={`${open ? "block" : "hidden"}`}
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${
                open ? "flex" : "hidden"
              }`}
            >
              {["Blog", "Portfolio", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-[#FEA116] focus:text-[#FEA116] focus:outline-none focus:shadow-outline"
                  href="#"
                  onClick={handleNavItemClick} // Close the menu when an item is clicked
                >
                  {item}
                </a>
              ))}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex flex-row text-white bg-transparent items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-[#FEA116] focus:outline-none focus:shadow-outline"
                >
                  <span>More</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right transition-transform duration-300 transform ${
                    dropdownOpen
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                >
                  <div className="px-2 pt-2 pb-4 bg-gray-700 rounded-md shadow-lg">
                    {" "}
                    {/* Changed background color to gray-700 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          title: "Appearance",
                          description: "Easy customization",
                        },
                        {
                          title: "Comments",
                          description: "Check your latest comments",
                        },
                        {
                          title: "Analytics",
                          description: "Take a look at your statistics",
                        },
                      ].map((item) => (
                        <a
                          key={item.title}
                          className="flex flex-row items-start rounded-lg p-2 bg-transparent hover:text-[#FEA116] focus:text-[#FEA116] focus:outline-none focus:shadow-outline"
                          href="#"
                          onClick={handleNavItemClick} // Close the menu when an item is clicked
                        >
                          <div className="bg-teal-500 text-white rounded-lg p-3">
                            {/* Add your icon SVG here */}
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              className="md:h-6 md:w-6 h-4 w-4"
                            >
                              {/* Customize your SVG paths here */}
                              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Right-most button */}
              <button className="ml-4 text-white bg-[#FEA116] hover:bg-opacity-80 focus:outline-none focus:shadow-outline px-4 py-2 rounded-sm">
                Special Action
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
