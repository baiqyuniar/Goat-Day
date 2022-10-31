import React from "react";

const Activity = () => {
  return (
    <div className="w-full p-5 max-w-7xl mx-auto">
      <h1 className="mb-8 text-center text-3xl font-bold text-slate-900">
        Kegiatan Goat-Day
      </h1>

      <ul className="grid place-content-center sm:grid-cols-2 gap-8">
        <li className="flex">
          <div className="px-4 text-5xl flex mt-auto mb-auto font-extralight text-slate-700">
            01.
          </div>
          <div className="flex flex-col mt-auto mb-auto">
            <div className="text-xl font-bold text-slate-800">Ngapain nih?</div>
            <p className="max-w-sm py-2 text-md text-slate-900">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes,
            </p>
          </div>
        </li>
        <li className="flex flex-row justify-end">
          <div className="px-4 text-5xl flex mb-auto mt-auto font-extralight text-slate-700">
            02.
          </div>
          <div className="flex flex-col mt-auto mb-auto">
            <div className="text-xl font-bold text-slate-800">
              Mau ngapain lagi?
            </div>
            <p className="max-w-sm py-2 text-md text-slate-900">
              Nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
              eget, arcu. In enim justo, rhoncus ut,
            </p>
          </div>
        </li>
        <li className="flex">
          <div className="px-4 text-5xl flex mb-auto mt-auto font-extralight text-slate-700">
            03.
          </div>
          <div className="flex flex-col mt-auto mb-auto">
            <div className="text-xl font-bold text-slate-800">
              Kalo ini ngapain?
            </div>
            <p className="max-w-sm py-2 text-md text-slate-900">
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
              feugiat a, tellus.
            </p>
          </div>
        </li>
        <li className="flex flex-row justify-end">
          <div className="px-4 text-5xl flex mb-auto mt-auto font-extralight text-slate-700">
            04.
          </div>
          <div className="flex flex-col mt-auto mb-auto">
            <div className="text-xl font-bold text-slate-800">
              Kegiatan ini?
            </div>
            <p className="max-w-sm py-2 text-md text-slate-900">
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi.
            </p>
          </div>
        </li>
        <li className="flex">
          <div className="px-4 text-5xl flex mb-auto mt-auto font-extralight text-slate-700">
            05.
          </div>
          <div className="flex flex-col mt-auto mb-auto">
            <div className="text-xl font-bold text-slate-800">Ini apa ya?</div>
            <p className="max-w-sm py-2 text-md text-slate-900">
              Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
              condimentum rhoncus, sem quam semper libero, sit amet adipiscing
              sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
              hendrerit id,
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Activity;
