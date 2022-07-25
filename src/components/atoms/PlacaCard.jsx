import React from "react";
import { PlacaCardContainer } from "../../styles/mainPage.style";
import rimacBoy from "../../assets/images/rimac_boy.png";

const PlacaCard = () => {
  return (
    <PlacaCardContainer>
      <div className="infoLeft">
        <p>Placa: C2U-114</p>
        <h1>Wolkswagen 2019 Golf</h1>
      </div>
      <img src={rimacBoy} alt="" />
    </PlacaCardContainer>
  );
};

export default PlacaCard;
