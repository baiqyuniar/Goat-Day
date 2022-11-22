import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full top-0 z-20 lg:fixed shadow-lg bg-white">
      <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
        <div className="flex items-center justify-between py-3 lg:block">
          <img className="h-auto w-28" alt="Logo" src={Logo} />

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
          className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
          }`}
        >
          <div>
            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
              <li className="text-gray-600 hover:text-indigo-600 cursor-pointer mt-4 mb-4 lg:mt-0 lg:mb-0 text-center">
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Beranda
                </Link>
              </li>

              <li className="text-gray-600 hover:text-indigo-600 cursor-pointer mt-4 mb-4 lg:mt-0 lg:mb-0 text-center">
                <a href="Profil">Profil</a>
              </li>

              <li className="text-gray-600 hover:text-indigo-600 cursor-pointer mt-4 mb-4 lg:mt-0 lg:mb-0 text-center">
                <Link
                  to="artikel"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                >
                  Artikel
                </Link>
              </li>

              <li className="text-gray-600 hover:text-indigo-600 cursor-pointer mt-4 mb-4 lg:mt-0 lg:mb-0 text-center">
                <Link
                  to="produk"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Produk
                </Link>
              </li>

              <li className="text-gray-600 hover:text-indigo-600 cursor-pointer mt-4 mb-4 lg:mt-0 lg:mb-0 text-center ">
                <Link
                  to="mitra"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Mitra
                </Link>
              </li>

              <li className="mt-8 lg:mt-0">
                <a
                  onClick={() => navigate("/login")}
                  className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block cursor-pointer lg:inline"
                >
                  Masuk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
