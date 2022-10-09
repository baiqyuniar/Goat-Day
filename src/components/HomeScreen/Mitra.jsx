import { React, useState } from "react";

const Mitra = () => {
  const partner = [
    {
      firstname: "Luke",
      lastname: "Cole",
      role: "Peternak",
      picture: "https://asianwiki.com/images/b/b5/Reply_1988-005.jpg",
      description:
        "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
    },
    {
      firstname: "Luke",
      lastname: "Balmer",
      role: "Investor",
      picture:
        "https://img.okezone.com/content/2020/05/19/33/2216196/jaehyun-nct-127-tulis-surat-permintaan-maaf-gara-gara-ke-bar-di-itaewon-fQIVosvqQX.jpg",
      description:
        "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
    },
  ];

  const [member, setMember] = useState(0);

  return (
    <div className="relative mt-12 mx-auto py-10 w-full max-w-screen bg-white text-gray-700 lg:h-[65vh]">
      {/* :TITLE CONTAINER */}
      <div className="mb-4 flex justify-center items-center">
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        <h2 className="px-3 text-xl lg:text-2xl text-gray-700 font-bold font-oswald uppercase tracking-wider">
          Mitra
        </h2>
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
      </div>

      <div className="mb-8 flex justify-center items-center">
        <span className="px-3 text-lg rounded-full lg:text-base text-white font-light font-oswald bg-sky-700 hover:tracking-wider cursor-pointer">
          Tertarik bergabung?
        </span>
      </div>

      <div className="mx-auto px-4 w-full max-w-7xl grid grid-cols-2 gap-y-4 sm:gap-y-10 lg:my-14">
        {/* :PICTURES CONTAINER */}
        <div className="col-span-full lg:col-span-1 flex flex-col sm:flex-row justify-center items-center">
          {/* ::Team members */}
          <ul className="mb-4 sm:mb-0 px-4 flex sm:flex-col justify-center items-center space-x-3 sm:space-x-0 sm:space-y-3">
            {partner.map((person, index) => (
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
          {/* ::Picture selected team member */}
          <div className="rounded overflow-hidden">
            <img
              src={partner[member].picture}
              alt=""
              className="w-full max-w-xs object-cover"
            />
          </div>
        </div>

        {/* :DETAILS CONTAINER */}
        <div className="col-span-full lg:col-span-1 mx-auto lg:mx-2 max-w-xl flex flex-col justify-center space-y-4">
          {/* ::Role */}
          <span className="font-bold uppercase tracking-wider">
            {partner[member].role}
          </span>
          {/* ::Name */}
          <h3 className="text-4xl sm:text-5xl font-bold space-y-2">
            <span className="block">{partner[member].firstname}</span>
            <span className="block">{partner[member].lastname}</span>
          </h3>
          {/* ::Description */}
          <p className="py-2 text-base">{partner[member].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mitra;
