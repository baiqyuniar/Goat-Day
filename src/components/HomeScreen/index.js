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
      <Hero />
      <Artikel />
      <Produk />
      <Mitra />
      <Footer />
    </div>
  );
};

export default HomeScreen;
