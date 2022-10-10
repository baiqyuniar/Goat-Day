import React from "react";

const Review = () => {
  return (
    <div className="lg:pl-64 px-6 pt-1 2xl:container">
      <div className="flex flex-wrap mb-2">
        <div className="w-full md:w-1/2 xl:w-1/2 pt-3 px-3 md:pr-2">
          <div className="bg-green-600 border rounded shadow p-2">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pl-1 pr-4"></div>
              <div className="flex-1 text-right lg:text-left">
                <h5 className="text-white">Investor</h5>
                <h3 className="text-white text-3xl">
                  50 orang
                  <span className="text-green-400"></span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/2 pt-3 px-3 md:pl-2">
          <div className="bg-blue-600 border rounded shadow p-2">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pl-1 pr-4"></div>
              <div className="flex-1 text-right">
                <h5 className="text-white">Total Investasi</h5>
                <h3 className="text-white text-3xl">Rp150.000.000,00</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/2 pt-3 px-3 md:pl-2 xl:pl-3 xl:pr-2">
          <div className="bg-purple-600 border rounded shadow p-2">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pl-1 pr-4"></div>
              <div className="flex-1 text-right lg:text-left">
                <h5 className="text-white">Peternak</h5>
                <h3 className="text-white text-3xl">40 orang</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 xl:w-1/2 pt-3 px-3 md:pr-2 xl:pl-2 xl:pr-3">
          <div className="bg-red-600 border rounded shadow p-2">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pl-1 pr-4"></div>
              <div className="flex-1 text-right">
                <h5 className="text-white">Jumlah Ternak</h5>
                <h3 className="text-white text-3xl">65 ekor</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
