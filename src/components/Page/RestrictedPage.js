import React from "react";
import Dashboard from "../DashboardPage/index";
import Login from "./Login";

const Auth = () => {
  if (localStorage.getItem("accessToken")) {
    return false;
  }
};

export const RestrictedPage = () => {
  const isAuth = Auth();
  return isAuth ? <Dashboard /> : <Login />;
};
