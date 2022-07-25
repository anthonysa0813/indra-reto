import React from "react";
import FormLogin from "../components/FormLogin";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { LoginPageGrid } from "../styles/loginPage.style";

const LoginPage = () => {
  return (
    <LoginPageGrid>
      <div className="leftColumn ">
        <div className="bg-neutrals ">
          <Header />
          <Hero />
        </div>
      </div>
      <div className="rightColumn">
        <FormLogin />
      </div>
    </LoginPageGrid>
  );
};

export default LoginPage;
