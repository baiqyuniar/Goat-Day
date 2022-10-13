import React from "react";
import kambing from "../../assets/kambing.png";

const Produk = () => {
  return (
    <div
      id="produk"
      className="relative mt-2 mx-auto w-full max-w-screen lg:h-[70vh]"
    >
      <div className="mx-auto max-w-xl sm:max-w-2xl lg:max-w-none py-5 px-4 w-full">
        {/* :TITLE */}
        <div className="flex justify-center items-center">
          <span className="h-1 w-14 rounded-3xl bg-gray-700" />
          <a
            href="./"
            className="cursor-pointer text-xl px-3 lg:text-2xl text-gray-700 font-bold font-oswald uppercase tracking-wider"
          >
            Produk
          </a>
          <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        </div>

        {/* :PRODUCT SUGGESTION */}

        <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 lg:my-10">
          <a
            href="/Aqiqah"
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 hover:cursor-pointer shadow-lg rounded-lg"
          >
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-16 w-16 rounded-md text-white">
                <img className="h-12 w-12" alt="Kambing" src={kambing} />
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold  py-4">
              Aqiqah
            </h3>
            <p className="text-md  text-gray-500  py-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </a>

          <a
            href="/Qurban"
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white hover:cursor-pointer shadow-lg rounded-lg"
          >
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-16 w-16 rounded-md text-white">
                <img className="h-12 w-12" alt="Kambing" src={kambing} />
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold  py-4">
              Qurban
            </h3>
            <p className="text-md text-gray-500 py-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </a>

          <a
            href="/Susu"
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6 px-4 py-4 bg-white shadow-lg rounded-lg hover:cursor-pointer"
          >
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-16 w-16 rounded-md text-white">
                <img className="h-12 w-12" alt="Kambing" src={kambing} />
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold  py-4">
              Susu Kambing
            </h3>
            <p className="text-md  text-gray-500 py-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Produk;
