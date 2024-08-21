// Importando as tabelas do DB
const sala = require('../model/sala');
const aluno = require('../model/aluno');



module.exports = {
    async sala(req, res){
        res.render('../views/index');
    },

    async salaInsert(req, res){
        // Recebe as informações do front-end
        const dados = req.body;
        // Criando sala no banco de dados
        await sala.create({
            Nome: dados.nomeSala,
            Capacidade: dados.capacidadeSala
        });
    // Redirecionar para a página principal
    res.redirect('/');
    },

    async aluno(req, res){
        res.render('../views/index');
    },

    async alunoInsert(req, res) {
        const dados = req.body;

        let foto = 'usuario.png';

        if (req.file) {
            foto = req.file.filename;
        }
        
        await aluno.create({
            Nome: dados.nome,
            Idade: dados.idade,
            Sexo: dados.genero,
            Foto: foto,
            IDSala: dados.selectSala
        });
    res.redirect('/');
    },

}