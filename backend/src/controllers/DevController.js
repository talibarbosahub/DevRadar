
// importar a biblioteca que faz chamadas para as APIs
const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')
module.exports ={

    async index (request, response ) {
        const devs = await Dev.find();
        return response.json(devs)
    },
    async store(request, response) {    // async informar que a requisição é asincrona e pode demorar 
        
        const {github_username, techs, latitude, longitude} = request.body;
        
        let dev = await Dev.findOne({github_username});// verifica se já existe um dev no banco de dados com o mesmo user_name para evitar duplicidade 
        
        if (!dev){   // se o dev não existe cria um novo dev
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); // instrução paara aguardar o retorno da requisição para seguir com o código
            
            const {name = login , avatar_url, bio} = apiResponse.data;  // desestruturar o response para buscar somente o o solicitado, e se name não existir quero que traga por padrão o login 
            
            const techsArray = parseStringAsArray(techs);
            
            const location ={
                type:'Point',
                coordinates: [longitude, latitude],
            };
            
            dev = await  Dev.create ({
                github_username, //shortsintax, js entende que o nome da variavel é igual ao valor
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }
        
        //console.log(name, avatar_url, bio), github_username
    
        return response.json(dev)  // envia um objeto json como resposta 
    }
};