import React from "react";

const Aqiqah = () => {
  return (
    <section className="mx-auto py-8 lg:py-0 px-4 sm:px-6 w-full max-w-7xl lg:max-w-screen-xl bg-white">
      <div class="py-20 lg:py-8 md:py-12 bg-white">
        <div class="flex flex-col px-8 mx-auto space-y-8 max-w-7xl xl:px-12">
          <div class="relative">
            <h1 class="w-full uppercase text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:mb-8">
              Aqiqah
            </h1>
            <blockquote class="w-full py-8 mx-auto -mt-2 text-lg italic text-center text-gray-700 intro sm:max-w-3xl">
              Dari 'Amr bin Syu'aib dari ayahnya, dari kakeknya, Rasulullah
              bersabda, “Barangsiapa diantara kalian yang ingin menyembelih
              (kambing) karena kelahiran bayi maka hendaklah ia lakukan untuk
              laki-laki dua kambing yang sama dan untuk perempuan satu kambing.”
              <br />
              <cite class="w-full py-8 mx-auto md:mt-0 -mt-2 text-lg font-semibold text-center text-gray-700 intro sm:max-w-3xl">
                - Sanadnya Hasan, Hadits Riwayat Abu Dawud (2843), Nasa'I
                (7/162-163), Ahmad (2286, 3176) dan Abdurrazaq (4/330), dan
                dishahihkan oleh al-Hakim (4/238) -
              </cite>
            </blockquote>
          </div>

          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                class="rounded-lg shadow-xl mr-auto ml-auto"
                src={require("../../../assets/aqiqah.jpeg")}
                alt="Paket 1 Aqiqah"
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p class="mb-2 text-sm uppercase font-semibold leading-none text-left text-indigo-600 uppercase">
                Paket 1
              </p>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Apanih?</h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
              <div className="mt-4 flex">
                <span className="px-3 mr-auto ml-auto text-lg lg:text-base font-semibold font-oswald">
                  Rp.xxxxxx
                </span>
                <a
                  target="_blank"
                  href="https://wa.me/6281234567890"
                  className="px-3 mr-auto ml-auto text-lg rounded-full lg:text-base text-white font-light font-oswald bg-indigo-600 hover:tracking-wider cursor-pointer"
                >
                  Pesan
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
              <img
                class="rounded-lg shadow-xl mr-auto ml-auto"
                src={require("../../../assets/aqiqah.jpeg")}
                alt=""
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              <p class="mb-2 uppercase text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                paket 2
              </p>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Apanih?</h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo.
              </p>
              <div className="mt-4 flex">
                <a
                  target="_blank"
                  href="https://wa.me/6281234567890"
                  className="px-3 mr-auto ml-auto text-lg rounded-full lg:text-base text-white font-light font-oswald bg-indigo-600 hover:tracking-wider cursor-pointer"
                >
                  Pesan
                </a>
                <span className="px-3 mr-auto ml-auto text-lg lg:text-base font-semibold font-oswald">
                  Rp.xxxxxx
                </span>
              </div>
            </div>
          </div>

          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                class="rounded-lg shadow-xl mr-auto ml-auto"
                src={require("../../../assets/aqiqah.jpeg")}
                alt=""
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p class="mb-2 uppercase text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                paket 3
              </p>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Apanih?</h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                vitae, eleifend ac, enim. Aliquam lorem ante,
              </p>

              <div className="mt-4 flex">
                <span className="px-3 mr-auto ml-auto text-lg lg:text-base font-semibold font-oswald">
                  Rp.xxxxxx
                </span>
                <a
                  target="_blank"
                  href="https://wa.me/6281234567890"
                  className="px-3 mr-auto ml-auto text-lg rounded-full lg:text-base text-white font-light font-oswald bg-indigo-600 hover:tracking-wider cursor-pointer"
                >
                  Pesan
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
              <img
                class="rounded-lg shadow-xl mr-auto ml-auto"
                src={require("../../../assets/aqiqah.jpeg")}
                alt=""
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              <p class="mb-2 uppercase text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                paket 4
              </p>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Apanih?</h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id.
              </p>

              <div className="mt-4 flex">
                <a
                  target="_blank"
                  href="https://wa.me/6281234567890"
                  className="px-3 mr-auto ml-auto text-lg rounded-full lg:text-base text-white font-light font-oswald bg-indigo-600 hover:tracking-wider cursor-pointer"
                >
                  Pesan
                </a>
                <span className="px-3 mr-auto ml-auto text-lg lg:text-base font-semibold font-oswald">
                  Rp.xxxxxx
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aqiqah;
