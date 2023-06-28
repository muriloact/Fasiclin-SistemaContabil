import React from "react";
import "./PlanoCadastrados.css";
// import ForDialog from "../movimentoContabil/MovimentoContabil";

export default function PlanosCadastrados(props){
    // const [open,setOpen] = React.useState(false);

    return (
        <>
            <div className="planosCadastrados"> 
                <input type="checkbox"/>
                <label className="id-planos">
                    {props.idCo_PlanoContas} - 
                </label>
                <label className="descricao-planos">
                    {props.Descricao}
                </label>
                    <button className="vizualizar-plano">Vizualizar</button>
                <br/>
            </div>
        </>
    )
}