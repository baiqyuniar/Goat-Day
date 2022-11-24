import React, { useEffect, useState } from "react";
import NavbarD from "./NavbarD";
import Sidebar from "./Sidebar";
import Review from "./Review";
import Statistic from "./Statistic";
import axiosJWT from "../../api/axios";

const Dashboard = () => {
  const getUser = async () => {
    let accessToken = localStorage.getItem("accessToken")
      ? localStorage.getItem("accessToken")
      : null;

    const response = await axiosJWT.get(
      "https://apigoatday.dekakrens.my.id/users",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response.data);
  };

  return (
    <div>
      <NavbarD />
      <Sidebar />
      <button
        onClick={getUser}
        className="bg-indigo-400 text-white ml-96 w-20 h-12 rounded-lg"
      >
        Get users
      </button>

      {/* <Review /> */}
      {/* <Statistic /> */}
    </div>
  );
};

export default Dashboard;
