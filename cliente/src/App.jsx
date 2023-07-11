import './App.css'
import React,{ useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Axios from "axios";


function App() {

  const [value, setValues] = useState();
  const [listPlanoContas, setPlanoContas] = useState();
    
  const carregarValores = value =>{
    setValues(prevValue =>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  const EventoCadastroClick = () =>{
    Axios.post("http://localhost:3001/cadastrarPlano",{
      CodigoPlano: value.CodigoPlano,
      Tipo:value.Tipo,
      Descricao:value.Descricao
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
      <>
        <NavBar />
            <Stack direction="vertical" className='Container'>
        <h1>CADASTRO DE PLANO DE CONTAS</h1>
        <Row className='Form'>
          <Col xs={4} as='div' >
            {typeof listPlanoContas !== 'undefined' && listPlanoContas.map((value)=>{
              return(<PlanoCadastradosrados
              key={value.CodigoPlano}
              listCard={listPlanoContas}
              setlistaPlanoCadastrados={setPlanoContas}
              CodigoPlano = {value.CodigoPlano}
              Descricao={value.Descricao}
              />)
            })}
          </Col>
          <Col xs={5}>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Código</Form.Label>
                <Form.Control type="text" placeholder="Digite o código do plano" className='CodigoPlano' onChange={carregarValores}/>
              </Form.Group>
              <Form.Group className='tipo-input'>
                <Form.Label>Tipo</Form.Label>
                <Form.Control
                type="text"
                placeholder="Digite o Tipo do plano"
                className='Tipo'
                />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Descrição do plano</Form.Label>
                <Form.Control as="textarea" rows={3} className='Descricao' onChange={carregarValores}/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Button variant="primary" size="lg" className='Cadastrar' onClick={() => EventoCadastroClick()}>
         <Form.Label>Cadastrar</Form.Label>
        </Button>
            </Stack>
      </>
  )
}

export default App
