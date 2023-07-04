import React from  "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";

import TelaInicial from "./home";
import Routes from "./components/rout";

function App() {
  return (
    <BrowserRouter>
      <TelaInicial/>
        <Routes/>
    </BrowserRouter>
  );
}

export default App;
