import React, { useRef, useState, useEffect } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");

  const [pwd, setPwd] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://apigoatday.dekakrens.my.id/register", {
        name: user,
        email: email,
        password: pwd,
        confirm_password: matchPwd,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setErrMsg(error.response.data.errMsg);
      }
    }
  };

  return (
    <section className="h-screen bg-gray-100 bg-opacity-50 container flex items-center justify-center flex-1 h-full mx-auto">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form
        onSubmit={handleSubmit}
        className="container max-w-2xl mx-auto shadow-md md:w-3/4"
      >
        <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
          <p className="mb-4 text-2xl font-semibold uppercase tracking-wider text-center text-black">
            Registrasi
          </p>
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Data Akun</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Nama pengguna"
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                  <p
                    id="uidnote"
                    className={
                      userFocus && user && !validName
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4-24 karakter.
                    <br />
                    Harus dimulai dengan huruf.
                    <br />
                    Huruf, angka, underscore, hypen diijinkan.
                  </p>
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    id="user-info-name"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type={open === false ? "password" : "text"}
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                    placeholder="Password"
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                  <p
                    id="pwdnote"
                    className={pwdFocus ? "instructions" : "offscreen"}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8-24 karakter.
                    <br />
                    Harus mengandung huruf besar, huruf kecil, angka, dan
                    karakter spesial.
                    <br />
                    Karakter spesial yang diijinkan:{" "}
                    <span aria-label="exclamation mark">!</span>{" "}
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </p>
                  <div className="text-2xl absolute top-[10px] right-3">
                    {open === false ? (
                      <AiFillEye onClick={toggle} />
                    ) : (
                      <AiFillEyeInvisible onClick={toggle} />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type={open === false ? "password" : "text"}
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Konfirmasi Password"
                  />

                  <p
                    id="confirmnote"
                    className={matchFocus ? "instructions" : "offscreen"}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Harus sama dengan password yang telah diinput
                  </p>

                  <div className="text-2xl absolute top-[10px] right-3">
                    {open === false ? (
                      <AiFillEye onClick={toggle} />
                    ) : (
                      <AiFillEyeInvisible onClick={toggle} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Informasi Pribadi</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    id="nama"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Nama lengkap"
                  />
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    id="telepon"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Nomor telepon"
                  />
                </div>
              </div>

              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    id="alamat"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Alamat"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="w-full py-4 mx-auto items-center justify-center text-gray-500 md:w-1/3">
            <button
              type="submit"
              className="py-2 px-4  bg-blue-500 hover:bg-blue-800 cursor-pointer text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
            >
              Daftar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
