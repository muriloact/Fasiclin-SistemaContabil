import React from "react";
import {BrowserRouter,Switch,Route } from "react-router-dom";

import MovimentoContabil from "../../page/MovimentoContabil";
import EscrituraFiscal from "../../page/EscrituraFiscal";
import CadastroPlanos from "../../page/CadastroPlano";
import TelaInicial from "../../home";

export default function Routes(){
    return(


            <Route path="/CadastroPlanoContas" Component={CadastroPlanos}/>


    )
}



/* 

        <Route path="/EscrituraFiscal" Component={EscrituraFiscal}/>
        <Route path="/MovimentoContabil" Component={MovimentoContabil}/>
        <Route path="/" Component={TelaInicial}/>
*/