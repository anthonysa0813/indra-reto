import React from "react";
import { InputWithSelectContainer } from "../../styles/loginPage.style";

const InputWithSelect = () => {
  return (
    <InputWithSelectContainer>
      <div className="select ">
        <span>DNI</span>
        <i className="icon-arrow_down"></i>
      </div>
      <div className="select__value">
        <input type="text" placeholder="Nro. de doc" />
      </div>
    </InputWithSelectContainer>
  );
};

export default InputWithSelect;
