import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainContent } from "../styles/mainPage.style";
import Account from "./atoms/Account";
import ListOption from "./atoms/ListOption";
import OfferCard from "./atoms/OfferCard";
import OptionsMenu from "./atoms/OptionsMenu";
import PlacaCard from "./atoms/PlacaCard";

const Main = () => {
  const navigate = useNavigate();

  return (
    <MainContent>
      <div className="wrapper">
        <section className="field">
          <div className="backNavigation">
            <Link to="/login" className="circle">
              <i className="icon-arrow-left"></i>
            </Link>
            <p>VOLVER</p>
          </div>
        </section>
        <section className="welcome">
          <h1>
            ¡Hola, <span className="text-red">Juan!</span>
          </h1>
          <p>Conoce las coberturas para tu plan</p>
        </section>
        <section className="main__stats ">
          <div className="stats__grid">
            <div className="stats__info ">
              <PlacaCard />
              <Account />
              <div className="separate"></div>
              <OptionsMenu />
              <ListOption iconName="ride" title="Llanta robada" />
              <ListOption
                iconName="shock"
                title="Choque y/o pasarte la luz roja "
              />
              <ListOption
                iconName="runover"
                title="Atropello en la vía Evitamiento "
              />
            </div>
            <div className="stats__offer">
              <OfferCard />
            </div>
          </div>
        </section>
      </div>
    </MainContent>
  );
};

export default Main;
