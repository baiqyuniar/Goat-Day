import React, { useState } from "react";

const DagingKambing = () => {
  const product = {
    name: "Daging Kambing",
    price: 25000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id tenetur consectetur, rem vel repudiandae, obcaecati autem corporis maxime laborum debitis ullam. Similique nisi, porro perspiciatis vel ipsam aliquam repudiandae. Facilis dolorem incidunt nobis quaerat exercitationem quos eaque ducimus aut possimus, aperiam, enim nulla provident! Ad necessitatibus atque pariatur, iste dignissimos ex.",
    pictures: [
      {
        src: "https://awsimages.detik.net.id/community/media/visual/2017/08/31/c044cd22-d2e3-4078-8988-78d8d134e5b6.jpg?w=700&q=90",
        alt: "Daging kambing",
      },
      {
        src: "https://storage.nu.or.id/storage/post/16_9/big/daging_1657278196.webp",
        alt: "Daging kambing potong",
      },
      {
        src: "https://assets.promediateknologi.com/crop/0x0:686x386/x/photo/2022/07/11/1952919645.png",
        alt: "Daging kambing 3",
      },
      {
        src: "https://kureta.id/Asset/uploads/1657433077184-ilustrasi-daging-sapi.jpg",
        alt: "Daging dadu",
      },
    ],
  };

  const [mainPicture, setMainPicture] = useState(0);

  return (
    <div className="mx-auto px-4 w-full max-w-7xl text-gray-700">
      <div className="flex flex-col lg:flex-row lg:mt-24">
        <div className="py-8 w-full flex flex-row items-center">
          <div>
            <div className="w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden">
              <img
                src={product.pictures[mainPicture].src}
                alt={product.pictures[mainPicture].alt}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="mt-6 mx-auto">
              <ul className="grid border-gray-400 grid-flow-col auto-cols-fr gap-4">
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

          <div className="lg:py-8 w-full flex flex-col">
            <div className="pb-5 sm:px-6 lg:border-b-2 border-gray-200">
              <h1 className="hidden lg:block text-4xl text-gray-700 font-light tracking-wide">
                {product.name}
              </h1>
              <p className="mt-10 text-base text-gray-500">
                {product.description}
              </p>
            </div>

            <div className="py-8 sm:px-6 border-b-2 border-gray-200">
              <h1 className="mb-5 block lg:hidden text-3xl sm:text-4xl text-gray-700 font-light tracking-wide">
                {product.name}
              </h1>

              <div class="flex flex-row mr-auto ml-auto justify-center w-1/6">
                <button>
                  <svg
                    class="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>

                <input
                  class="mx-2 border font-semibold text-center w-8"
                  type="text"
                  value="1"
                />
                <button>
                  <svg
                    class="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
                <div className="flex mr-auto ml-auto justify-center">
                  <span className="font-semibold text-lg ">kg</span>
                </div>
              </div>
            </div>

            <div className="pt-8 sm:px-6 flex flex-wrap lg:flex-nowrap justify-around items-center border-b-2 lg:border-none border-gray-200">
              <button
                type="button"
                className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md bg-yellow-500 text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-yellow-600"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DagingKambing;
