import React from "react";

const Bakalan = () => {
  const menuState = false;
  const product = [
    {
      name: "KODE",
      picture: require("../../assets/kambing.png"),
      alt: "Kambing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id tenetur consectetur, rem vel repudiandae, obcaecati autem corporis maxime laborum debitis ullam. Similique nisi, porro perspiciatis vel ipsam aliquam repudiandae. Facilis dolorem incidunt nobis quaerat exercitationem quos eaque ducimus aut possimus, aperiam, enim nulla provident! Ad necessitatibus atque pariatur, iste dignissimos ex.",
      date: "21 November 2022",
      weight: "8 kilogram",
    },
    {
      name: "KODE",
      picture: require("../../assets/kambing.png"),
      alt: "Kambing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id tenetur consectetur, rem vel repudiandae, obcaecati autem corporis maxime laborum debitis ullam. Similique nisi, porro perspiciatis vel ipsam aliquam repudiandae. Facilis dolorem incidunt nobis quaerat exercitationem quos eaque ducimus aut possimus, aperiam, enim nulla provident! Ad necessitatibus atque pariatur, iste dignissimos ex.",
      date: "21 November 2022",
      weight: "8 kilogram",
    },
    {
      name: "KODE",
      picture: require("../../assets/kambing.png"),
      alt: "Kambing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id tenetur consectetur, rem vel repudiandae, obcaecati autem corporis maxime laborum debitis ullam. Similique nisi, porro perspiciatis vel ipsam aliquam repudiandae. Facilis dolorem incidunt nobis quaerat exercitationem quos eaque ducimus aut possimus, aperiam, enim nulla provident! Ad necessitatibus atque pariatur, iste dignissimos ex.",
      date: "21 November 2022",
      weight: "8 kilogram",
    },
  ];

  return (
    <section className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="px-6 flex items-center justify-center space-x-4 2xl:container">
        <div className="flex space-x-4">
          <div
            className={`"flex-1 flex items-center justify-between"${
              menuState ? "" : "hidden"
            }`}
          >
            <div className="mx-auto lg:items-center py-8 lg:py-0 px-4 sm:px-6 w-full max-w-7xl lg:max-w-screen-xl bg-white grid grid-cols-1 gap-8 lg:justify-center">
              {product.map((data) => (
                <div className="mx-auto  max-w-2xl lg:max-w-none grid md:grid-cols-2 gap-x-5">
                  <div className="order-first lg:order-last col-span-full lg:col-span-1 relative rounded-sm border-2 border-gray-200">
                    <img
                      src={data.picture}
                      alt={data.alt}
                      className="object-contain lg:flex lg:mt-12 lg:mx-auto  w-full h-80 lg:w-[75%] lg:h-[75%]"
                    />
                  </div>

                  <div className="order-last lg:order-first col-span-full lg:col-span-1 lg:max-w-xl flex flex-col items-center justify-center">
                    <h1 className="text-3xl sm:text-4xl text-gray-700 font-extrabold tracking-wide">
                      {data.name}
                    </h1>
                    <p className="mt-10 text-sm text-gray-500 font-medium">
                      {data.description}
                    </p>

                    <div className="my-5 flex flex-row gap-5">
                      <div className="my-4 p-4 w-auto flex items-center inline-block rounded-md bg-indigo-500 text-base text-white font-semibold tracking-wide hover:bg-indigo-700">
                        <p className="cursor-default mx-auto">
                          Berat : {data.weight}
                        </p>
                      </div>

                      <div className="my-4 p-4 w-auto flex items-center inline-block rounded-md bg-indigo-500 text-base text-white font-semibold tracking-wide hover:bg-indigo-700">
                        <p className="mx-auto cursor-default">
                          Diberikan pada {data.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bakalan;
