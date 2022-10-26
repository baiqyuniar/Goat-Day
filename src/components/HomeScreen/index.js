import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Produk from "./Produk";
import Mitra from "./Mitra";
import Navbar from "./Navbar";
import Artikel from "./Artikel";

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
