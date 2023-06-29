import React from "react";
import "./PlanoCadastrados.css";

export default function PlanosCadastrados(props){

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
                <br/>
                    <button className="vizualizar-plano">Vizualizar</button>
            </div>
        </>
    )
}