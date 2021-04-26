const express = require('express');
const app = express();
const cliente = require("./cliente");

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//cadastro de clientes no banco
app.get('/cadastro-cliente', function (req, res) { //caminho do formulário de cadastro de usuarios
    res.render('cadastro-cliente');
});

app.get('/cadastro-clinica', function (req, res) { //caminho do formulário de cadastro de clinicas
    res.render('cadastro-clinica');
});

app.post('/cliente-cadastrado', function (req, res) {
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

app.post('/clinica-cadastrada', function (req, res) {
    res.send("Nome: " + req.body.nomeClinica),
        res.send("Cnpj: " + req.body.cnpj)
});

app.listen(1000);