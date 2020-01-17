// importando o modulo do microframework express
const express = require('express');
// importando biblioteca para dar acesso node a base de dados Mongo
const mongoose = require('mongoose');

//importar rotas
const routes = require('./routes');

// criar a aplicação para colocar uma rota do servidor no ar
const app =  express();

// conectando a aplicação com banco de dados MongoDB (banco não relacional)
mongoose.connect('mongodb+srv://talita:123@cluster0-ic2ml.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); // string de conexão com o Mongodb

// rotas da aplicação
app.use(express.json());
app.use(routes);

//designado a porta para acesso no localhost
app.listen(3333);



