import React from "react";
import { Slide } from "react-slideshow-image";
import ArtikelCard from "./ArtikelCard";

const Artikel = () => {
  return (
    <section
      id="artikel"
      className="mt-4 px-4 lg:pt-16 min-w-full py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-lg md:px-24 lg:px-8 lg:mt-0"
    >
      <div className="mb-4 flex justify-center items-center">
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        <h2
          className="px-3 text-xl lg:text-2xl text-gray-700 font-bold font-oswald  bg-cover bg-clip-text bg-center uppercase text-transparent uppercase tracking-wider font-extrabold  antialiased"
          style={{
            backgroundImage:
              "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)",
          }}
        >
          Artikel
        </h2>
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
      </div>
      <div className="p-5">
        <ArtikelCard />
      </div>
    </section>
  );
};

export default Artikel;
