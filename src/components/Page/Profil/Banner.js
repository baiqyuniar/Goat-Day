import React from "react";

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative w-full p-5 max-w-7xl mx-auto lg:mt-20 bg-white"
    >
      <div className="container m-auto px-6 text-gray-600 md:px-12 lg:mt-4 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjY-v2yMaC_roTyXB_ZpHRhbgFk3-Ye7IOCA&usqp=CAU"
              alt="banner"
              loading="lazy"
              className="flex mr-auto ml-auto w-full"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Goat-Day apa nih isinya hayo? Aku bingung
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
