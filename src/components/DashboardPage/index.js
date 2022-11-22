import React from "react";
import NavbarD from "./NavbarD";
import Sidebar from "./Sidebar";
import Review from "./Review";
import Statistic from "./Statistic";

const Dashboard = () => {
  return (
    <div>
      <NavbarD />
      <Sidebar />
      <Review />
      <Statistic />
    </div>
  );
};

export default Dashboard;
