import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { Navigate } from "react-router-dom";

const baseURL = "https://apigoatday.dekakrens.my.id";
let accessToken = localStorage.getItem("accessToken");

const instance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

instance.interceptors.request.use(async (req) => {
  const user = jwt_decode(accessToken);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (!isExpired) {
    req.headers.Authorization = `Bearer ${accessToken}`;
    return req;
  }

  await axios
    .post(`${baseURL}/token`, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      localStorage.setItem("accessToken", res.data.data.token);
      return req;
    })
    .catch((e) => {
      sessionStorage.clear();
      localStorage.clear();
      Navigate("/");
      window.location.reload();
    });

  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      const statusCode = err.response.status;
      if (statusCode == 401 || statusCode == 403) {
        localStorage.clear();
        sessionStorage.clear();
      }
      throw new Error(err.response?.data?.message);
    }
  );
});

export default instance;
