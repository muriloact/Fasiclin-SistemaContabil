import React,{useState,useEffect} from  "react";
import './App.css';
import Axios from "axios";
import PlanosCadastrados from "./components/cards/PlanoCadastrados.js";

function App() {

  const [value, setValues] = useState();
  const [listPlanoContas, setPlanoContas] = useState();
    
  const carregarValores = value =>{
    setValues(prevValue =>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  const eventodeClique = () =>{
    Axios.post("http://localhost:3001/registrar",{
      codigo: value.codigo,
      categoria:value.categoria,
      precisao:value.precisao,
      descricao:value.descricao
    }).then((response) =>{
      console.log(response);
    });
  }

  useEffect(()=>{
    Axios.get('http://localhost:3001/getPlanosCadastrados').then((response)=>{
      setPlanoContas(response.data);
    });
  },[]);

  return (
    <div className="App">
      <nav>
        <a href='./movimentocontabil'>Movimento Contabil</a>
        <a href='./escriturafiscal'>Escritura Fiscal</a>
      </nav>
        <br/>
      <div className='DivCadastroPlano'>
        <h1>Cadastro de Plano de Contas</h1>
        <form className='formCadastro'>
          <label>Codigo: </label>
          <input
          type='text'
          name ="codigo"
          placeholder="Codigo"
          className='input--codigo'
          onChange={carregarValores}
          />
          <br/>
          <label>Categoria: </label>
          <input
          type='text'
          name ="categoria"
          placeholder="Categoria"
          className='input--categoria'
          onChange={carregarValores}
          />
          <br/>
          <label>Precisão: </label>
          <input
          type='text'
          name ="precisao"
          placeholder="Precisao"
          className='input--precisao'
          onChange={carregarValores}
          />
          <br/>
          <label>Descrição: </label>
          <input
          type='text'
          name ="descricao"
          placeholder="Descrição"
          className='input--descricao'
          onChange={carregarValores}
          />
          <br/>
          <button className='CadastrarPlano'
          onClick={()=> eventodeClique()}
          >Cadastrar Plano
          </button>
          <br/>
        </form>
      </div>
        <br/>
        <div>
          {typeof listPlanoContas !=='undefined' && listPlanoContas.map((value)=>{
            return(<PlanosCadastrados key={value.idCo_PlanoContas}
            listCard={listPlanoContas}
            setListPlanosCadastrados={setPlanoContas}
            idCo_PlanoContas={value.idCo_PlanoContas}
            Descricao={value.Descricao}
            ></PlanosCadastrados>)
          })}
        </div>
    </div>
  );
}

export default App;
