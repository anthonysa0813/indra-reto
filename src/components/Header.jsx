import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { HeaderContainer } from "../styles/loginPage.style";

const Header = () => {
  return (
    <HeaderContainer className="">
      <div className="wrapper">
        <div className="header  ">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="Logo de rimac seguros" />
            </Link>
          </div>
          <div className="header__info">
            <p className="header__question">¿Tienes alguna duda?</p>
            <i className="icon-phone"></i>
            <p className="header__text">
              <Link to="/success">Llámanos</Link>
            </p>
            <p className="header__number">(01) 411 6001</p>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
