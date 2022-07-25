import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { MainPageGrid } from "../styles/mainPage.style";

const MainPage = () => {
  return (
    <MainPageGrid>
      <Header />
      <Sidebar />
      <Main />
    </MainPageGrid>
  );
};

export default MainPage;
