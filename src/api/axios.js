import axios from "axios";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "https://apigoatday.dekakrens.my.id";
// const baseURL = "http://localhost:5000";
let accessToken = localStorage.getItem("accessToken")
  ? localStorage.getItem("accessToken")
  : null;

const axiosJWT = axios.create({
  withCredentials: true,
  baseURL,
});

axiosJWT.interceptors.request.use(
  async (req) => {
    accessToken = localStorage.getItem("accessToken");

    const decodedJWT = jwtDecode(accessToken);
    const isExpired = dayjs.unix(decodedJWT.exp).diff(dayjs()) < 1;

    if (!isExpired) {
      req.headers.Authorization = `Bearer ${accessToken}`;
      return req;
    }

    await axios.get(`${baseURL}/token`).then((res) => {
      localStorage.setItem("accessToken", res.data?.accessToken);
      req.headers.Authorization = `Bearer ${res.data?.accessToken}`;
      return req;
    });
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosJWT;
