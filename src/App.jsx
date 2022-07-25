import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesPath from "./routes/RoutesPath";
import "animate.css";

const App = () => {
  return (
    <BrowserRouter>
      <RoutesPath />
    </BrowserRouter>
  );
};

export default App;
