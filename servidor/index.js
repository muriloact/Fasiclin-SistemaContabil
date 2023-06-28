const mysql2 = require('mysql2');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql2.createPool({
    host:"concipe.com.br",
    user:"concipecom_fasiclin",
    password:"db_aluno2023",
    database:"concipecom_fasiclin",
});

app.post('/registrar', (req, res) => {
    const {codigo} = req.body;
    const {categoria} = req.body;
    const {precisao} = req.body;
    const {descricao} = req.body;

    let SQL = `INSERT INTO Co_PlanoContas(idCo_PlanoContas,Categoria, Precisao, Descricao) VALUES (?,?,?,?)`;

    db.query(SQL,[codigo,categoria,precisao,descricao],(err,result)=>{
        console.log(err);
    })
})

app.get('/getPlanosCadastrados', (req, res)=>{
    let SQL = 'SELECT * FROM concipecom_fasiclin.Co_PlanoContas';

    db.query(SQL,(err,result)=>{
        if(err) console.log(err);
        else res.send(result);
    });
});

app.listen(3001,() => {
    console.log('Esta rodando');
});