const express = require ('express');
const app = express();
app.use(express.json());


app.post('', function (req, res) {
    let nome = req.body.nome; //nome que virá do corpo do json quando for enviado o formulário de cadastro.
    let cpf = req.body.cpf; //cpf que virá do corpo do json quando for enviado o formulaprio de cadastro.
    let email = req.body.email; //cpf que virá do corpo do json quando for enviado o formulaprio de cadastro.
    let telefone = req.body.telefone; //cpf que virá do corpo do json quando for enviado o formulaprio de cadastro.
    let cep = req.body.cep; //cpf que virá do corpo do json quando for enviado o formulaprio de cadastro.
    let rua = req.body.rua; //cpf que virá do corpo do json quando for enviado o formulaprio de cadastro.
    let numero = req.body.numero; //cpf que virá do corpo do json quando for enviado o formulaprio de cadastro.
    let bairro = req.body.bairro; //cpf que virá do corpo do json quando for enviado o formulaprio de cadastro.
    let senha = req.body.senha; //cpf que virá do corpo do json quando for enviado o formulaprio de cadastro.    
});
app.listen(4000);