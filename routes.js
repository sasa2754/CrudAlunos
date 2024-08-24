// Iniciando routes do express e o multer
const express = require('express');
const route = express.Router();
const multer = require('multer');


// Importando os controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');
const editar = require('./src/controllers/editar');


// Recebendo o arquivo do multer
const config = require('./src/config/multer');

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/', home.pagInicialPost);

route.post('/cadastroSala', cadastro.salaInsert);
route.get('/', cadastro.sala);

// Cadastro de aluno que irá receber um arquivo com o name do HTML chamado 'imagem', ele pega pelo name, não pelo id
route.post('/cadastroAluno', multer(config).single('imagem'), cadastro.alunoInsert);
route.get('/', cadastro.aluno);

route.get('/editarAluno/:id', editar.alunos);
route.post('/editarAluno/:id', multer(config).single('imagem'), editar.adicionar);

route.get('/editarSala/:id', editar.salas);
route.post('/editarSala/:id', editar.atualizar);
route.post('/deletarSala/:id', editar.deletar);

route.post('/deletarAluno/:id', cadastro.deleteAluno);


module.exports = route;

