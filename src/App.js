import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Aqiqah from "./components/Page/Aqiqah";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Page/Login";
import Register from "./components/Page/Register";
import Qurban from "./components/Page/Qurban";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="Login" element={<Login />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Register" element={<Register />} />
        <Route path="Aqiqah" element={<Aqiqah />} />
        <Route path="Qurban" element={<Qurban />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
