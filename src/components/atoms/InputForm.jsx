import React from "react";
import { InputFormContainer } from "../../styles/loginPage.style";

const InputForm = ({ placeholder, type }) => {
  return (
    <InputFormContainer className=" border">
      <input type={type} placeholder={placeholder} />
    </InputFormContainer>
  );
};

export default InputForm;
