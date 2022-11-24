import React from "react";

const Info = () => {
  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] w-auto h-auto lg:my-12">
      <div className="px-6 flex flex-col gap-y-7 md:flex-row items-center justify-around space-x-4 2xl:container">
        <div className="w-full p-4 rounded-md shadow-md bg-indigo-700 text-white lg:max-w-lg">
          <div className="space-y-2">
            <h3 className="text-2xl text-center">Jumlah ternak saat ini</h3>
            <p className="text-center font-extrabold text-xl">3 ekor</p>
          </div>
        </div>

        <div className="w-full rounded-md bg-indigo-700 text-white p-4 shadow-md lg:max-w-lg">
          <div className="space-y-2">
            <h3 className="text-2xl text-center">Pakan harian ternak</h3>
            <p className="text-center font-extrabold text-xl">2 kilogram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
