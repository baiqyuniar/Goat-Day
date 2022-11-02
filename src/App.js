import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Aqiqah from "./components/Page/Aqiqah/index";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Page/Login";
import Register from "./components/Page/Register";
import Qurban from "./components/Page/Qurban/index";
import SusuKambing from "./components/Page/Susu/index";
import Profil from "./components/Page/Profil/index";
import DagingKambing from "./components/Page/Daging/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Profil" element={<Profil />} />
        <Route path="Aqiqah" element={<Aqiqah />} />
        <Route path="Qurban" element={<Qurban />} />
        <Route path="Susu" element={<SusuKambing />} />
        <Route path="Daging" element={<DagingKambing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
