import React from "react";
// import Footer from "./Footer";
import Hero from "./Hero";
import Produk from "./Produk";
import Mitra from "./Mitra";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Produk />
      <Mitra />
      {/* <Footer /> */}
    </div>
  );
};

export default HomeScreen;
