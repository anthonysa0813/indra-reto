import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import SuccessPage from "../pages/SuccessPage";

const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
};

export default RoutesPath;
