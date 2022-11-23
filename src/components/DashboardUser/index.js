import React from "react";
import NavbarU from "./NavbarU";
import SidebarU from "./SidebarU";
import Bakalan from "./Bakalan";
import Info from "./Info";

const DashboardUser = () => {
  return (
    <div className="w-screen">
      <NavbarU />
      <SidebarU />
      <Info />
      <Bakalan />
    </div>
  );
};

export default DashboardUser;
