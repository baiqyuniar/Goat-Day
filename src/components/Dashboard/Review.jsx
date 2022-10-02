import React from "react";

const Review = () => {
  return (
    <div class="lg:pl-64 px-6 pt-1 2xl:container">
      <div class="flex flex-wrap mb-2">
        <div class="w-full md:w-1/2 xl:w-1/2 pt-3 px-3 md:pr-2">
          <div class="bg-green-600 border rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pl-1 pr-4"></div>
              <div class="flex-1 text-right lg:text-left">
                <h5 class="text-white">Investor</h5>
                <h3 class="text-white text-3xl">
                  50 orang
                  <span class="text-green-400"></span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 xl:w-1/2 pt-3 px-3 md:pl-2">
          <div class="bg-blue-600 border rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pl-1 pr-4"></div>
              <div class="flex-1 text-right">
                <h5 class="text-white">Total Investasi</h5>
                <h3 class="text-white text-3xl">Rp150.000.000,00</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 xl:w-1/2 pt-3 px-3 md:pl-2 xl:pl-3 xl:pr-2">
          <div class="bg-purple-600 border rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pl-1 pr-4"></div>
              <div class="flex-1 text-right lg:text-left">
                <h5 class="text-white">Peternak</h5>
                <h3 class="text-white text-3xl">40 orang</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 xl:w-1/2 pt-3 px-3 md:pr-2 xl:pl-2 xl:pr-3">
          <div class="bg-red-600 border rounded shadow p-2">
            <div class="flex flex-row items-center">
              <div class="flex-shrink pl-1 pr-4"></div>
              <div class="flex-1 text-right">
                <h5 class="text-white">Jumlah Ternak</h5>
                <h3 class="text-white text-3xl">65 ekor</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
