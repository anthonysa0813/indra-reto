import React from "react";
import { Button } from "../../styles/loginPage.style";

const Botton = ({ content }) => {
  return (
    <Button>
      <p>{content.toUpperCase()}</p>
    </Button>
  );
};

export default Botton;
