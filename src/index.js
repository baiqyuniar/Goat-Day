import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";

axios.defaults.withCredentials =
  process.env.REACT_APP_STATE == "production" ? true : false;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
