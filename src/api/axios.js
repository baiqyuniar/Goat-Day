import axios from "axios";
// import jwt_decode from "jwt-decode";
// import dayjs from "dayjs";

const BASE_URL = "https://apigoatday.dekakrens.my.id";

const instance = axios.create({
  BASE_URL,
});

// instance.interceptors.request.use(async (req) => {

//   const user = jwt_decode(accessToken);
//   const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

//   if (!isExpired) {
//     req.headers.Authorization = `Bearer ${accessToken}`;
//     return req
//   }

//   await axios.post(`${BASE_URL}/token`, null, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     }
//   })
//   .then((res) => {
//     localStorage.setItem('atkn', res.data.data.token);
//     req.headers.Authorization = `Bearer`
//   })

// });

export default instance;
