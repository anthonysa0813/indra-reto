import React from "react";
import { NavLink } from "react-router-dom";
import { OptionsMenuContainer } from "../../styles/mainPage.style";

const OptionsMenu = () => {
  return (
    <OptionsMenuContainer>
      <h3>Agrega o quita coberturas</h3>
      <div className="menuOptions">
        <a>Protege a tu auto</a>
        <a>Protege a los que te rodea</a>
        <a>mejora tu plan</a>
      </div>
    </OptionsMenuContainer>
  );
};

export default OptionsMenu;
