// importar modulo de roteamento do express
const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
const routes = Router();
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store );     //recebe como parametro um caminho para o usuário acessar e como segundo parametro uma arrow funcion para fazer uma requisição e obter uma response para o front-end
routes.get('/search', SearchController.index);
    

module.exports = routes;
