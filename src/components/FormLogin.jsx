import React from "react";
import { Link } from "react-router-dom";
import { Button, FormLoginContainer } from "../styles/loginPage.style";
import InputForm from "./atoms/InputForm";
import InputWithSelect from "./atoms/InputWithSelect";

const FormLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FormLoginContainer onSubmit={handleSubmit}>
      <div className="wrapper ">
        <h2>Déjanos tus datos</h2>
        <div className="field">
          <InputWithSelect />
        </div>
        <div className="field">
          <InputForm placeholder="Celular" type="tel" />
        </div>
        <div className="field">
          <InputForm placeholder="Placa" type="text" />
        </div>
        <div className="field terms">
          <div className="boxCheck">
            <i className="icon-check"></i>
          </div>
          <p>
            Acepto la Política de{" "}
            <span className="text_underline">
              Protecciòn de Datos Personales
            </span>{" "}
            y los <span className="test_underline">Términos y Condiciones</span>
            .
          </p>
        </div>
        <Button>
          <Link to="/">Cotizar</Link>
        </Button>
      </div>
    </FormLoginContainer>
  );
};

export default FormLogin;
