import React from "react";
import { HeaderContainer, HeroContainer } from "../styles/loginPage.style";
import rimacGirl from "../assets/images/hero_girl_small.png";
const Hero = () => {
  return (
    <HeroContainer className="">
      <div className="wrapper">
        <div className="heroContainer  ">
          <div className="heroContainer__info ">
            <span>¡NUEVO!</span>
            <h1 className="font-400">
              Seguro Vehicular
              <span className="red"> Tracking</span>
            </h1>
            <p className="text">
              Cuentanos donde le haras seguimiento a tu seguro
            </p>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
