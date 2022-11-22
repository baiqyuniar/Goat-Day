import React from "react";
import { useNavigate } from "react-router-dom";
import produkList from "./produkList";

const Produk = () => {
  const nav = useNavigate();
  return (
    <section
      id="produk"
      className="mt-4 px-4 lg:pt-16 min-w-full py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-lg md:px-24 lg:px-8 lg:mt-0"
    >
      <div className="mx-auto max-w-xl sm:max-w-2xl lg:max-w-none py-5 px-4 w-full">
        {/* :TITLE */}
        <div className="flex justify-center items-center">
          <span className="h-1 w-14 rounded-3xl bg-gray-700" />
          <h2
            href="./"
            className="px-3 text-xl lg:text-2xl text-gray-700 font-bold font-oswald  bg-cover bg-clip-text bg-center uppercase text-transparent uppercase tracking-wider font-extrabold  antialiased"
            style={{
              backgroundImage:
                "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)",
            }}
          >
            Produk
          </h2>
          <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        </div>

        {/* :PRODUCT SUGGESTION */}

        <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 lg:gap-12 lg:my-10">
          {produkList.map((data, key) => (
            <a
              key={key}
              onClick={() => nav(data.href)}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 hover:cursor-pointer wrapper bg-transparent antialiased text-gray-900"
            >
              <img
                className="w-full bg-gray-200 object-cover object-center rounded-lg shadow-md"
                alt="Kambing"
                src={data.pict}
              />

              <div className="relative px-4 -mt-16 ">
                <div className="bg-white p-6 rounded-lg shadow-lg shadow-blue-500/50 shadow-lg">
                  <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                    {data.produk}
                  </h4>

                  <div className="mt-1">
                    <p className="text-gray-600 text-sm">{data.deskripsi}</p>
                  </div>

                  <div className="mt-4">
                    <span className="text-teal-600 text-md font-semibold">
                      Lihat katalog{" "}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produk;
