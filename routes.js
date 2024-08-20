// Iniciando routes do express
const express = require('express');
const route = express.Router();


// Importando os controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');

// Iniciando as rotas
route.get('/', home.pagInicialGet);


route.post('/cadastroSala', cadastro.salaInsert);
route.post('/cadastroAluno', cadastro.alunoInsert);

module.exports = route;

