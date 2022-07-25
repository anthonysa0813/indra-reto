import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../styles/loginPage.style";
import { CardOfferContainer } from "../../styles/mainPage.style";

const OfferCard = () => {
  return (
    <CardOfferContainer className="card">
      <p>MONTO</p>
      <span>$35.00</span>
      <p>mensuales</p>
      <hr />
      <p>El precio incluye:</p>
      <ul>
        <li>
          <i className="icon-check text-green"></i>
          <p>Llanta de respuesto</p>
        </li>
        <li>
          <i className="icon-check text-green"></i>
          <p>Analisis de motor</p>
        </li>
        <li>
          <i className="icon-check text-green"></i>
          <p>Aros gratis</p>
        </li>
      </ul>
      <Button>
        <Link to="/success">Lo quiero</Link>
      </Button>
    </CardOfferContainer>
  );
};

export default OfferCard;
