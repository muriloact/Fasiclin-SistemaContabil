import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";

import MovimentoContabil from "../../page/MovimentoContabil";
import EscrituraFiscal from "../../page/EscrituraFiscal";
import CadastroPlanos from "../../page/CadastroPlano";

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/CadastroPlanoContas" Component={CadastroPlanos}/>
            <Route exact path="/EscrituraFiscal" Component={EscrituraFiscal}/>
            <Route exact path="/MovimentoContabil" Component={MovimentoContabil}/>
        </Switch>
        </BrowserRouter>
    )
}