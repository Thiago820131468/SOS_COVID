const express = require('express');
const app = express();
const cliente = require("./cliente");
const clinica = require("./clinica");

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));



app.use( 
    (req, res, next) => {

        res.setHeader('Access-Control-Allow-Origin', "*");
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

        next();
});

/*
//cadastro de clientes no banco
app.get('/cadastro-cliente', function (req, res) { //caminho do formulário de cadastro de usuarios
//A função function(clientes) recebe todos os dados da tabela cliente
    cliente.findAll().then(function(clientes){
//Esse é o  caminho para onde está enviando os dados da tabela cliente
        res.render('../login/src/index', {clientes: clientes});
    })
    
});
*/


app.get('/cadastro-clinica', function (req, res) { //caminho do formulário de cadastro de clinicas
    res.render('cadastro-clinica');
});

app.post('/cadastro-cliente', function (req, res) {
    cliente.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        cep: req.body.cep,
        rua: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        senha: req.body.senha
    }).then(function () {
        res.redirect('/home'); //Redireciona o usuário cadastrado para a tela inicial
        console.log("Usuário cadastrado");
    }).catch(function (erro) {
        console.log("Não foi possível cadastrar o usuário" + erro);
    });
});

app.post('/cadastro-clinica', function (req, res) {
    clinica.create({
        nome: req.body.nome,
        cnpj: req.body.cnpj,
        email: req.body.email,
        telefone: req.body.telefone,
        cep: req.body.cep,
        rua: req.body.rua,
        numero: req.body.numero,
        bairro: req.body.bairro,
        senha: req.body.senha
    }).then(function () {
        res.redirect('/home'); //Redireciona o clínica cadastrada para a tela inicial
        console.log("Clínica Cadastrada");
    }).catch(function (erro) {
        console.log("Não foi possível cadastrar a clínica" + erro);
    });
});

module.exports = app;