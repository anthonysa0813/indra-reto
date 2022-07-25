import React from "react";
import Header from "../components/Header";
import { SuccessGrid } from "../styles/successPage";
import heroImage from "../assets/images/success_hero.png";
import Botton from "../components/atoms/Botton";
import { Button } from "../styles/loginPage.style";
import animationBoySmall from "../assets/images/animation_boy_small.png";

const SuccessPage = () => {
  return (
    <>
      <Header />
      <SuccessGrid>
        <div className="col success__grid-animation  ">
          <img className="imageMedium" src={heroImage} alt="" />
          <img className="imageSmall" src={animationBoySmall} alt="" />
        </div>
        <div className="col success__grid-info ">
          <h1>
            <span className="text-red">¡Te damos la bienvenida!</span> Cuenta
            con nosotros para proteger tu vehículo
          </h1>
          <p>
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
            tu correo: joel.sanchez@gmail.com
          </p>
          {/* <Botton>jeje</Botton> */}
          <Button>cómo usar mi seguro</Button>
        </div>
      </SuccessGrid>
    </>
  );
};

export default SuccessPage;
