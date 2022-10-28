import { React, useState } from "react";
import mitraSlider from "./mitra-slider";

const Mitra = () => {
  const [member, setMember] = useState(0);

  return (
    <section
      id="mitra"
      className="mt-4 px-4 lg:pt-16 min-w-full py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-lg md:px-24 lg:px-8 lg:mt-0"
    >
      <div className="mb-4 flex justify-center items-center">
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        <h2 className="px-3 text-xl lg:text-2xl text-gray-700 font-bold font-oswald uppercase tracking-wider">
          Mitra
        </h2>
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
      </div>

      <div className="mx-auto px-4 w-full max-w-7xl grid grid-cols-2 gap-y-4 sm:gap-y-10 lg:my-14">
        <div className="col-span-full lg:col-span-1 flex flex-col sm:flex-row justify-center items-center">
          <ul className="mb-4 sm:mb-0 px-4 flex sm:flex-col justify-center items-center space-x-3 sm:space-x-0 sm:space-y-3">
            {mitraSlider.map((person, index) => (
              <li
                key={person.lastname}
                className={`w-12 h-12 rounded-full overflow-hidden filter ${
                  index !== member
                    ? "saturate-0 hover:brightness-125"
                    : "saturate-100"
                }`}
              >
                <button
                  className="w-full h-full"
                  onClick={() => setMember(index)}
                >
                  <img src={person.picture} alt="" className="object-cover" />
                </button>
              </li>
            ))}
          </ul>

          <div className="rounded overflow-hidden">
            <img
              src={mitraSlider[member].picture}
              alt=""
              className="w-full max-w-xs object-cover"
            />
          </div>
        </div>

        {/* :DETAILS */}
        <div className="col-span-full lg:col-span-1 mx-auto lg:mx-2 max-w-xl flex flex-col justify-center space-y-4">
          <span className="font-bold uppercase tracking-wider">
            {mitraSlider[member].role}
          </span>

          <h3 className="text-4xl sm:text-5xl font-bold space-y-2">
            <span className="block">{mitraSlider[member].firstname}</span>
            <span className="block">{mitraSlider[member].lastname}</span>
          </h3>

          <p className="py-2 text-base">{mitraSlider[member].description}</p>

          <div className="mb-8 flex">
            <a
              target="_blank"
              href="https://wa.me/6281234567890"
              className="px-3 text-lg rounded-full lg:text-base text-white font-light font-oswald bg-sky-700 hover:tracking-wider cursor-pointer"
            >
              Hubungi kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mitra;
