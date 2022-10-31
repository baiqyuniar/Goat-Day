import React from "react";
import { Fade } from "react-slideshow-image";
import sliderData from "./hero-slider";

const Hero = () => {
  const props = {
    duration: 5000,
    autoplay: true,
    arrows: false,
    infinite: true,
  };

  return (
    <section
      id="hero"
      className="mt-4 px-4 lg:pt-16 min-w-full py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:mt-20"
    >
      <Fade {...props}>
        {sliderData.map((sliderData, index) => (
          <div
            className="lg:my-8 lg:mx-8 flex flex-col items-center justify-between mt-20 lg:flex-row each-slide"
            key={index}
          >
            <div className="lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-2xl">
                <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  {sliderData.title}
                </h2>
                <p className="text-base text-gray-700 md:text-lg mb-6 ">
                  {sliderData.desc}
                </p>
              </div>
            </div>

            <div className="relative  lg:w-1/2">
              <img
                className="object-cover w-full h-56 rounded shadow-lg lg:w-screen sm:h-96"
                src={sliderData.picture}
                alt=""
              />
            </div>
          </div>
        ))}
      </Fade>
    </section>
  );
};

export default Hero;
