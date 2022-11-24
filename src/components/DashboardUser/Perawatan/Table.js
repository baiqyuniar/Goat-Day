import React from "react";
import { useTable } from "react-table";

const Section1 = () => {
  const menuState = false;

  return (
    <section className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="px-6 flex items-center justify-center space-x-4 2xl:container">
        <div className="flex space-x-4">
          <div
            className={`"flex-1 flex items-center justify-between"${
              menuState ? "" : "hidden"
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
