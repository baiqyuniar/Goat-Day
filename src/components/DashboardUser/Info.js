import React from "react";

const Info = () => {
  return (
    <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] w-auto h-auto lg:my-12">
      <div className="px-6 flex items-center justify-start space-x-4 2xl:container">
        <div class="w-auto bg-indigo-100 rounded-lg shadow-sm p-5 border-solid border border-indigo-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div class="flex flex-col sm:flex-row justify-start items-center gap-4">
            <div class="text-center sm:text-left">
              <h1 class="text-gray-700 text-lg font-bold tracking-wider">
                Total hewan ternak
              </h1>
              <p class="text-gray-500 text-lg font-semibold text-center">
                3 ekor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
