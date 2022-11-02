import React, { useState } from "react";
import product from "./dagingList";

const DagingKambing = () => {
  const [mainPicture, setMainPicture] = useState(0);

  const [buy, setBuy] = useState([]);

  const totalPay = buy.reduce((total, { price = 0 }) => total + price, 0);

  const addItem = (product) => setBuy((currentBuy) => [...currentBuy, product]);

  const removeItem = (product) => {
    setBuy((currentBuy) => {
      const indexOfItemToRemove = currentBuy.findIndex(
        (buyItem) => buyItem.id === product.id
      );

      if (indexOfItemToRemove === -1) {
        return currentBuy;
      }

      return [
        ...currentBuy.slice(0, indexOfItemToRemove),
        ...currentBuy.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const amountOfItems = (id) =>
    buy.filter((product) => product.id === id).length;

  return (
    <div className="mx-auto py-8 lg:py-0 px-4 sm:px-6 w-full max-w-7xl lg:max-w-screen-xl bg-white text-gray-600">
      <div className="flex flex-col lg:flex-row lg:mt-64">
        <div className="py-8 w-full lg:w-1/2 flex flex-col items-center">
          <div className="w-auto h-56 sm:h-72 lg:h-auto max-h-96 overflow-hidden">
            <img
              src={product.pictures[mainPicture].src}
              alt={product.pictures[mainPicture].alt}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="mt-6  mx-auto">
            <ul className="grid grid-flow-col auto-cols-fr gap-4">
              {product.pictures.slice(0, 4).map((picture, index) => (
                <li
                  key={picture.alt}
                  className={`col-span-1 p-1 w-16 rounded border-2 ${
                    index === mainPicture
                      ? "border-yellow-600"
                      : "border-transparent"
                  }`}
                >
                  <button
                    type="button"
                    className="block h-full rounded overflow-hidden"
                    onClick={() => setMainPicture(index)}
                  >
                    <img
                      src={picture.src}
                      alt={picture.alt}
                      className="object-contain"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:py-8 w-full lg:w-1/2 flex flex-col lg:ml-3  lg:border-l-2 border-gray-200">
          <div className="order-3 lg:order-1 pb-5 sm:px-6 lg:border-b-2 border-gray-200">
            <h1 className="hidden lg:block text-4xl text-gray-700 font-light tracking-wide">
              {product.name}
            </h1>

            <p className="mt-10 text-base text-gray-500">
              {product.description}
            </p>
          </div>

          <div className="lg:order-2 py-8 sm:px-6 border-b-2 border-gray-200">
            <h1 className="mb-5 block lg:hidden text-3xl sm:text-4xl text-gray-700 font-light tracking-wide">
              {product.name}
            </h1>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex mx-auto h-10 w-32">
                <div className="flex flex-row text-center h-10 w-full rounded-lg relative bg-transparent">
                  <button
                    className=" flex border-y-2 border-l-2 rounded-l-md justify-center text-center text-gray-600 hover:text-gray-700 h-full w-20 rounded-l cursor-pointer outline-none"
                    onClick={() => removeItem(product)}
                  >
                    <span className="text-2xl font-medium">−</span>
                  </button>

                  <div className="outline-none border-y-2 focus:outline-none text-center w-20  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex text-gray-700 outline-none">
                    <div className="flex items-center mx-auto">
                      {amountOfItems(product.id)}
                    </div>
                  </div>

                  <button
                    className=" flex border-y-2 border-r-2 rounded-r-md justify-center text-center text-gray-600 hover:text-gray-700 h-full w-20 rounded-r cursor-pointer"
                    onClick={() => addItem(product)}
                  >
                    <span className="text-2xl font-medium">+</span>
                  </button>
                </div>

                <div className="flex my-auto ml-2">
                  <span className="text-2xl font-medium">kg</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-3 pt-8 sm:px-6 flex flex-wrap lg:flex-nowrap justify-around items-center border-b-2 lg:border-none border-gray-200">
            <span className="m-2.5 text-4xl text-gray-500 font-extrabold">
              <span className="font-normal">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(totalPay)}
              </span>
            </span>
            <button
              type="button"
              className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md bg-indigo-600 text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-indigo-700"
            >
              Pesan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DagingKambing;
