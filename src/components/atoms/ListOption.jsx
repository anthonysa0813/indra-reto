import React, { useState } from "react";
import { ListOptionContainer } from "../../styles/mainPage.style";
import rideImage from "../../assets/images/tire_image.png";
import shockImage from "../../assets/images/shock_image.png";
import runImage from "../../assets/images/accident_image.png";
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";

const iconImage = {
  ride: rideImage,
  shock: shockImage,
  runover: runImage,
};

const ListOption = ({ iconName, title }) => {
  const [addActive, setAddActive] = useState(false);
  return (
    <>
      <ListOptionContainer className="">
        <div className="iconBox">
          <img src={iconImage[iconName]} alt="" />
        </div>
        <div className="title">
          <h5>{title}</h5>
          <div className="actionBox">
            {addActive ? (
              <>
                <div className="addActive__box">
                  <AiOutlineLine />
                </div>
                <p>QUITAR</p>
              </>
            ) : (
              <>
                <div className="addActive__box">
                  <AiOutlinePlus />
                </div>
                <p>AGREGAR</p>
              </>
            )}
          </div>
          {addActive && (
            <p className="animate__animated animate__bounce">
              He salido de casa a las cuatro menos cinco para ir a la academia
              de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
              bici, na llego a la academia que está en el centro del pueblo en
              una plaza medio-grande y dejo donde siempre la bici atada con una
              pitón a un sitio de esos de poner las bicis y mucho más
            </p>
          )}
        </div>
        {addActive ? (
          <i
            className="icon-arrow-up animate__animated animate__animate__rotateIn "
            onClick={() => setAddActive(!addActive)}
          ></i>
        ) : (
          <i
            className="icon-arrow_down animate__animated animate__animate__rotateIn"
            onClick={() => setAddActive(!addActive)}
          ></i>
        )}
      </ListOptionContainer>
    </>
  );
};

export default ListOption;
