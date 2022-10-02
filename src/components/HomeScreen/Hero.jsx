import React from "react";

const Hero = () => {
  return (
    <div className="px-4 lg:py-8 min-w-full py-16 w-full mx-auto h-[97vh] sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="lg:mt-32 flex flex-col items-center justify-between mt-20 lg:flex-row">
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
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://source.unsplash.com/1260x750?mountain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
