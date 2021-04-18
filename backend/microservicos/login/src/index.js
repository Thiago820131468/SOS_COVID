const express = require ('express');
const app = express();
app.use(express.json());

app.post('', function (req, res){
    let usuario = //QUERY select
    let senha = // QUERY select
 
    if (usuario == //USUÁRIO QUE VIRÁ DA QUERY){
        if (senha == //SENHA QUE VIRÁ DA QUERY) {
            res.end("Seja bem-vindo" + usuario);
        } else {
            res.end("Senha incorreto!")
        }
    } else {
        res.end ("Usuário não existe!");
    }
});

app.listen(5000);