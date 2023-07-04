import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){
    return <nav>
        <Link href='/'>Inicio</Link>
        <Link href='/CadastroPlano'>Cadastro de Plano Contas</Link>
        <Link href='/MovimentoContabil'>Movimento Contabil</Link>
        <Link href='/EscrituraFiscal'>Escritura Fiscal</Link>
    </nav>
}