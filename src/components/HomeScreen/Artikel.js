import React from "react";
import ArtikelCard from "./ArtikelCard";

const Artikel = () => {
  return (
    <div className="lg:min-w-fit lg:px-32">
      <div className="mb-4 flex justify-center items-center">
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        <h2 className="px-3 text-xl lg:text-2xl text-gray-700 font-bold font-oswald uppercase tracking-wider">
          Artikel
        </h2>
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
      </div>

      <div className="flex flex-row">
        <ArtikelCard />
        <ArtikelCard />
        <ArtikelCard />
      </div>
    </div>
  );
};

export default Artikel;
