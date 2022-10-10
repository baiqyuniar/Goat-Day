import React, { useEffect, useRef, useState } from "react";
import mountain1 from "../../assets/mountain1.jpg";
import mountain2 from "../../assets/mountain2.jpg";
import mountain3 from "../../assets/mountain3.jpg";

let count = 0;
let slideInterval;

const Hero = () => {
  const carouselImage = [mountain1, mountain2, mountain3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);
    startSlider();

    return () => {
      pauseSlider();
    };
  }, {});

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % carouselImage.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const imageLength = carouselImage.length;
    count = (currentIndex + imageLength - 1) % imageLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div className="px-4 lg:py-8 min-w-full py-16 w-full mx-auto lg:h-[96vh] sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="lg:mt-32 lg:mx-12 flex flex-col items-center justify-between mt-20 lg:flex-row">
        <div className="lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-2xl">
            <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over
              <span className="inline-block text-deep-purple-accent-400">
                a lazy dog
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg mb-6 ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
        </div>

        <div ref={slideRef} className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={carouselImage[currentIndex]}
            alt=""
          />
          <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
            <button onClick={handleOnPrevClick} />
            <button onClick={handleOnNextClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
