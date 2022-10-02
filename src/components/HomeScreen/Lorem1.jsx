import React from "react";
import kambing from "../../assets/kambing.png";

const Lorem1 = () => {
  const katalog = [
    {
      id: 1,
      href: "#link",
      name: "Brown Fox Jumps",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "New!",
      badgeClass: "text-purple-500",
      buttonClass: "hover:bg-purple-500",
      picture: kambing,
    },
    {
      id: 2,
      href: "#link",
      name: "Brown Fox Jumps",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Sale!",
      badgeClass: "text-orange-500",
      buttonClass: "hover:bg-orange-500",
      picture: kambing,
    },
    {
      id: 3,
      href: "#link",
      name: "Brown Fox Jumps",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Sale!",
      badgeClass: "text-orange-500",
      buttonClass: "hover:bg-orange-500",
      picture: kambing,
    },
    {
      id: 4,
      href: "#link",
      name: "Brown Fox Jumps",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Popular!",
      badgeClass: "text-blue-500",
      buttonClass: "hover:bg-blue-500",
      picture: kambing,
    },
    {
      id: 5,
      href: "#link",
      name: "Brown Fox Jumps",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "New!",
      badgeClass: "text-purple-500",
      buttonClass: "hover:bg-purple-500",
      picture: kambing,
    },
    {
      id: 6,
      href: "#link",
      name: "Brown Fox Jumps",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Sale!",
      badgeClass: "text-orange-500",
      buttonClass: "hover:bg-orange-500",
      picture: kambing,
    },
    {
      id: 7,
      href: "#link",
      name: "Brown Fox Jumps",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Sale!",
      badgeClass: "text-orange-500",
      buttonClass: "hover:bg-orange-500",
      picture: kambing,
    },
    {
      id: 8,
      href: "#link",
      name: "Brown Fox Jumps",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Popular!",
      badgeClass: "text-blue-500",
      buttonClass: "hover:bg-blue-500",
      picture: kambing,
    },
  ];

  return (
    <div className="relative mt-2 mx-auto w-full max-w-screen">
      <div className="mx-auto max-w-xl sm:max-w-2xl lg:max-w-none py-5 px-4 w-full">
        {/* :TITLE */}
        <div className="flex justify-center items-center">
          <span className="h-1 w-14 rounded-3xl bg-gray-700" />
          <a
            href="./"
            className="cursor-pointer text-xl px-3 lg:text-2xl text-gray-700 font-bold font-oswald uppercase tracking-wider"
          >
            Katalog
          </a>
          <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        </div>

        {/* :PRODUCT SUGGESTION */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-x-5">
          {katalog.map((product) => (
            <div
              key={product.id}
              className="col-span-1 relative py-3 px-4 shadow-sm rounded border border-gray-200 bg-white overflow-hidden hover:shadow-lg"
            >
              {/* ::Details */}
              <div className="relative z-10 flex flex-col items-start space-y-1">
                {/* :::badges */}
                <span
                  className={`text-sm ${product.badgeClass} font-bold uppercase tracking-wide`}
                >
                  {product.badge}
                </span>
                {/* :::name */}
                <h3 className="text-base lg:text-lg text-gray-700 font-semibold">
                  {product.name}
                </h3>
                {/* :::description */}
                <p className="hidden lg:block w-2/3 text-xs text-gray-500">
                  {product.description}
                </p>
                {/* :::shop now button */}
                <a
                  href={product.href}
                  className={`py-1 px-4 shadow-sm rounded border-2 border-gray-200 text-sm text-gray-700 font-semibold hover:text-white ${product.buttonClass} hover:border-transparent`}
                >
                  Shop Now
                </a>
              </div>
              {/* ::Picture */}
              <img
                src={product.picture}
                alt=""
                className="absolute top-1/2 right-0 lg:right-3 h-4/5 lg:h-3/4 opacity-50 lg:opacity-100 transform -translate-y-1/2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lorem1;
