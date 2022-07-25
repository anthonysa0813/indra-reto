import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarContainer } from "../styles/mainPage.style";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="menu">
        <div className="menu__medium">
          <div className="menu__item ">
            <NavLink to="/login" className="">
              1
            </NavLink>
            <p>Datos</p>
          </div>
          <div className="menu__separate"></div>
          <div className="menu__item">
            <NavLink to="/">2</NavLink>
            <p>Arma tu plan</p>
          </div>
        </div>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
