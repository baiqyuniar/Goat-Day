import React from "react";
import { AiFillShopping } from "react-icons/ai";
import Kambing from "../../assets/kambing.png";

const Qurban = () => {
  const products = [
    {
      id: 1,
      name: "Kambing Apa?",
      price: 3500000,
      href: "#link",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 2,
      name: "Kambing Apa?",
      price: 4000000,
      href: "#link",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 3,
      name: "Kambing Apa?",
      price: 3750000,
      href: "#link",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 4,
      name: "Kambing Apa?",
      price: 4225000,
      href: "#link",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 5,
      name: "Kambing Apa?",
      price: 4500000,
      href: "#link",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 6,
      name: "Kambing Apa?",
      price: 3864000,
      href: "#link",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 7,
      name: "Kambing Apa?",
      price: 4567000,
      href: "#link",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
    {
      id: 8,
      name: "Kambing Apa?",
      price: 4728500,
      href: "#link",
      picture: Kambing,
      pictureAlt: "Picture description blabla",
    },
  ];

  return (
    <div className="mx-auto py-8 px-4 sm:px-6 w-full max-w-7xl bg-white">
      <div className="mx-auto max-w-xs sm:max-w-2xl lg:max-w-none">
        {/* :CATEGORY TITLE */}
        <h2 className="text-2xl text-gray-700 uppercase text-center tracking-widest font-bold">
          Qurban
        </h2>
      </div>

      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-5">
        {products.map((product) => (
          <li key={product.id} className="col-span-1 group">
            <a href={product.href} className="flex sm:justify-center space-x-3">
              {/* :PICTURE */}
              <div className="flex-shrink-0 relative w-1/2 sm:w-2/5 h-44 sm:h-auto sm:min-h-full rounded-sm overflow-hidden filter brightness-95 group-hover:brightness-100">
                <img
                  src={product.picture}
                  alt={product.pictureAlt}
                  className="w-full h-full object-fill object-center"
                />
              </div>

              {/* :PRODUCT DETAILS */}
              <div className="flex flex-col">
                {/* ::Name */}
                <h3 className="text-base text-gray-700 font-semibold">
                  {product.name}
                </h3>
                {/* ::Price */}
                <p className="mt-1 mb-10 text-base text-gray-500 font-medium">{`$${product.price}`}</p>
                {/* ::Add to Cart Button */}
                <button className="mt-auto py-1.5 px-2 w-full inline-flex justify-between items-center rounded border-2 border-indigo-600 bg-white text-sm text-indigo-600 font-semibold tracking-wide whitespace-nowrap hover:bg-indigo-600 hover:text-white">
                  Add to Cart
                  <AiFillShopping className="ml-3 w-5 h-5" />
                </button>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Qurban;
