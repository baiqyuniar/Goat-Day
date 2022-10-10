import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
import Katalog from "./components/Page/Katalog";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Page/Login";
import Register from "./components/Page/Register";
import Footer from "./components/HomeScreen/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Aqiqah" element={<Katalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
