import React from "react";
import Kambing from "../../assets/kambing.png";

const Qurban = () => {
  const products = [
    {
      id: 1,
      name: "Kambing Apa?",
      price: 3500000,
      href: "#link",
      description: "Umur 3 tahun",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 2,
      name: "Kambing Apa?",
      price: 4000000,
      href: "#link",
      description: "Umur 3 tahun",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 3,
      name: "Kambing Apa?",
      price: 3750000,
      href: "#link",
      description: "Umur 2 tahun",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 4,
      name: "Kambing Apa?",
      price: 4225000,
      href: "#link",
      description: "Umur 3 tahun",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 5,
      name: "Kambing Apa?",
      price: 4500000,
      href: "#link",
      description: "Umur 2,5 tahun",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 6,
      name: "Kambing Apa?",
      price: 3864000,
      href: "#link",
      description: "Umur 3 tahun",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 7,
      name: "Kambing Apa?",
      price: 4567000,
      href: "#link",
      description: "Umur 4 tahun",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 8,
      name: "Kambing Apa?",
      price: 4728500,
      href: "#link",
      description: "Umur 3 tahun",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
  ];

  return (
    <div className="mx-auto py-8 px-4 sm:px-6 w-full max-w-7xl lg:max-w-screen-2xl bg-white">
      <div className="mx-auto max-w-xs sm:max-w-2xl lg:max-w-none">
        <h2 className="text-2xl text-gray-700 uppercase text-center tracking-widest font-bold">
          Qurban
        </h2>

        <div className="mt-6">
          <ul className="grid grid-cols-4 gap-10">
            {products.map((product) => (
              <li
                key={product.id}
                className="col-span-full sm:col-span-2 lg:col-span-1 group relative"
              >
                <a href={product.href} className="w-full h-full flex flex-col">
                  <div className="relative">
                    <div className="aspect-w-1 aspect-h-1 shadow-sm rounded-lg overflow-hidden group-hover:shadow-md">
                      <img
                        src={product.picture}
                        alt={product.pictureAlt}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-800 via-transparent opacity-70 group-hover:from-transparent" />
                    </div>
                    <span className="z-20 absolute bottom-3 right-5 px-0.5 rounded-md text-2xl text-white font-semibold antialiased group-hover:text-gray-700 group-hover:bg-white group-hover:bg-opacity-70">{`Rp${product.price}`}</span>
                  </div>
                  <div className="flex-grow mt-2 px-3 h-full">
                    <div className="relative flex flex-col">
                      <h3 className="text-base text-gray-800 font-semibold">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 font-medium">
                        {product.description}
                      </p>
                      <button className="mt-4 py-1.5 w-full rounded-md bg-gray-200 text-sm text-gray-600 font-semibold tracking-wide hover:bg-gray-300 hover:text-gray-800">
                        Tambahkan
                      </button>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Qurban;
