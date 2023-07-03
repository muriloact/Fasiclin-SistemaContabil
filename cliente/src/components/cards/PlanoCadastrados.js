import React from "react";
import "./PlanoCadastrados.css";
import FormDialog from "../dialog/dialog";

export default function PlanosCadastrados(props){
    
    const [open,setOpen] = React.useState(false);

    const handleClickCard = () =>{        
        setOpen(true)
    }

    return (
        <>
            <FormDialog
                className='form-botaodailog'
                open={open}
                setOpen={setOpen}
                codigo={props.idCo_PlanoContas}
                categoria={props.categoria}
                precisao={props.precisao}
                descricao={props.Descricao}
            />  
            <div className="planosCadastrados" onClick={handleClickCard}>
                <label className="id-planos">
                    {props.idCo_PlanoContas} - 
                </label>
                <label className="descricao-planos">
                    {props.Descricao}
                </label>
            </div>
        </>
    )
}