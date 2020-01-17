// importar e informar para o mangoose qual o formato do Dev
const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema')

const DevSchema = new mongoose.Schema({
    name: String, // formato que vai ser salvo no banco
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,  
        index: '2dsphere' // latitude e longitude
    }
});

module.exports = mongoose.model('Dev', DevSchema)