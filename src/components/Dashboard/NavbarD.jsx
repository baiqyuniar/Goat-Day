import { useState, useRef, useEffect } from "react";

// Profile Dropdown
const ProfileDropDown = (props) => {
  const [state, setState] = useState(false);
  const profileRef = useRef();

  const navigation = [
    { title: "Settings", path: "javascript:void(0)" },
    { title: "Log out", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={`relative ${props.class}`}>
      <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <img
            src="https://lastfm.freetls.fastly.net/i/u/ar0/cda8a2406d8561e60d8d5cab2c46f57c"
            className="w-full h-full rounded-full"
          />
        </button>
        <div className="lg:hidden z-20">
          <span className="block">Taylor Swift</span>
          <span className="block text-sm text-gray-500">
            swifties@gmail.com
          </span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li>
            <a
              key={idx}
              className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default () => {
  const [menuState, setMenuState] = useState(false);

  const navigation = [
    { title: "Dashboard", path: "./" },
    { title: "Categories", path: "./" },
    { title: "Report", path: "./" },
    { title: "Other data", path: "./" },
    { title: "Finance", path: "./" },
  ];

  return (
    <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
          <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">
            Dashboard
          </h5>
          <button class="w-12 h-16 -mr-2 border-r lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div class="flex space-x-4">
            <div className="flex-1 flex items-center justify-between">
              <div
                className={`"bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:border-none" ${
                  menuState ? "" : "hidden"
                }`}
              >
                <ul className="mt-12 space-y-5 z-20 bg-white lg:hidden">
                  {navigation.map((item, idx) => (
                    <li key={idx} className="text-gray-600 hover:text-gray-900">
                      <a href={item.path}>{item.title}</a>
                    </li>
                  ))}
                </ul>
                <ProfileDropDown class="mt-5 pt-5 border-t lg:hidden" />
              </div>

              <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                <form className="flex items-center space-x-2 border rounded-md p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-none text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                    type="text"
                    placeholder="Search"
                  />
                </form>
                <ProfileDropDown class="hidden lg:block" />
                <button
                  className="outline-none text-gray-400 block lg:hidden"
                  onClick={() => setMenuState(!menuState)}
                >
                  {menuState ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
