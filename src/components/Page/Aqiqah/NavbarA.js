import React from "react";
import { useRef, useState } from "react";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-scroll";

const NavbarA = () => {
  const [state, setState] = useState(false);
  const navRef = useRef();

  return (
    <nav
      ref={navRef}
      className="w-full top-0 z-20 lg:fixed shadow-lg border-b-2 bg-white"
    >
      <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
        <div className="flex items-center justify-end py-3 h-16 lg:block">
          <a href="/">
            <img className="h-auto w-28" alt="Logo" src={Logo} />
          </a>
          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 justify-between my-3 flex-row-reverse lg:overflow-visible lg:flex lg:justify-center lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
          }`}
        >
          <div>
            <div className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row lg:gap-4">
              <a
                href="/Qurban"
                className="text-gray-600 hover:bg-gradient-to-tr from-[#6e3cbc] to-[#4f46e5] hover:text-white hover:rounded-lg lg:p-4 cursor-pointer mt-4 mb-4 lg:mt-0 lg:mb-0 text-center"
              >
                Qurban
              </a>

              <a
                href="/Susu"
                className="text-gray-600 hover:bg-gradient-to-tr from-[#6E3CBC] to-[#4f46e5] hover:text-white hover:rounded-lg lg:p-4 cursor-pointer mt-4 mb-4 lg:mt-0 lg:mb-0 text-center"
              >
                Susu Kambing
              </a>

              <a
                href="/Daging"
                className="text-gray-600 hover:bg-gradient-to-tr from-[#6e3cbc] to-[#4f46e5] hover:text-white hover:rounded-lg lg:p-4 cursor-pointer mt-4 mb-4 lg:mt-0 lg:mb-0 text-center"
              >
                Daging Kambing
              </a>

              <a className="text-gray-600 hover:bg-gradient-to-tr from-[#6e3cbc] to-[#4f46e5] hover:text-white hover:rounded-lg lg:p-4 cursor-pointer mt-4 mb-4 lg:mt-0 lg:mb-0 text-center">
                Investasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarA;
