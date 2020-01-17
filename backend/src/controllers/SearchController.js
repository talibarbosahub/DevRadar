const Dev = require ('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports ={
    async index(request,response){
        const  {latitude, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs);
        //console.log(techsArray);
        const devs = await Dev.find({
            //Filtrar por Tecnologias
            techs: {
                $in: techsArray,// Operador lógico do MongoDb - encontra se o usuário tem as tecnlogias solicitada na requisição
            },
            // Busca todos os devs num raio de 10km -Filtro de geolocaliação
            location: {
                $near: { // Operador lógico do MongoDb para encontrar objetos perto de uma localização, recebe dois parametros, geometry e maxDistance 
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude] 
                    },
                    $maxDistance: 10000, // em metros = 10km
                }, 
            },
        });
        return response.json({ devs } )

    }
}