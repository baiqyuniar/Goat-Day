import axios from "axios";
import jwtDecode from "jwt-decode";

const baseURL = "https://apigoatday.dekakrens.my.id";
let accessToken = localStorage.getItem("accessToken")
  ? localStorage.getItem("accessToken")
  : null;

const axiosJWT = axios.create({
  baseURL,
});

const refreshToken = async () => {
  try {
    await axios.get(`${baseURL}/token`, { accessToken: accessToken });
  } catch (error) {
    console.log(error);
  }
};

axiosJWT.interceptors.request.use(
  async (config) => {
    accessToken = localStorage.getItem("accessToken");
    let currentDate = new Date();
    const expDate = jwtDecode(accessToken);

    if (expDate * 1000 < currentDate.getTime()) {
      await refreshToken();
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosJWT;
