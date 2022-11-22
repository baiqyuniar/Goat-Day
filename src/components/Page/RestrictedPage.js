import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";

const Auth = () => {
  if (localStorage.getItem("accessToken")) {
    return true;
  }
};

export const RestrictedPage = () => {
  const isAuth = Auth();
  return isAuth ? <Outlet /> : <Login />;
};
