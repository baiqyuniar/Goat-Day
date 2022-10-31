import React from "react";
import Footer from "./Footer";
import Hero from "./Hero/Hero";
import Produk from "./Produk/Produk";
import Mitra from "./Mitra/Mitra";
import Navbar from "./Navbar";
import Artikel from "./Artikel/Artikel";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto py-8 lg:py-0 px-4 sm:px-6 w-full max-w-7xl lg:max-w-screen-xl">
        <Hero />
        <Artikel />
        <Produk />
        <Mitra />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
