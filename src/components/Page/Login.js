import React, { useState, useRef, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import Dashboard from "../Dashboard";
import axios from "axios";

const Login = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response?.data));

      setUsername("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <Dashboard />
        </section>
      ) : (
        <div className="w-full h-screen font-sans bg-white">
          <img
            className="h-auto w-44 top-4 z-20 lg:fixed mx-3"
            alt="Logo"
            src={Logo}
          />

          <div className="container flex items-center justify-center flex-1 h-full mx-auto">
            <div className="w-full max-w-lg">
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <div className="leading-loose">
                <form
                  onSubmit={handleSubmit}
                  className="max-w-md p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl"
                >
                  <p className="mb-8 text-2xl font-semibold text-center text-black">
                    Masuk
                  </p>
                  <div className="mb-2">
                    <div className=" relative ">
                      <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                        placeholder="username"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className=" relative ">
                      <input
                        type={open === false ? "password" : "text"}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                        placeholder="password"
                      />
                      <div className="text-2xl absolute top-[10px] right-3">
                        {open === false ? (
                          <AiFillEye onClick={toggle} />
                        ) : (
                          <AiFillEyeInvisible onClick={toggle} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button
                      type="submit"
                      className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Masuk
                    </button>
                  </div>
                  <div className="text-center">
                    <span className="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
                      Tidak punya akun?
                    </span>
                    <a
                      href="Register"
                      className="ml-1 inline-block text-sm font-semibold align-baseline text-500 hover:text-blue-800 cursor-pointer"
                    >
                      Buat akun
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
