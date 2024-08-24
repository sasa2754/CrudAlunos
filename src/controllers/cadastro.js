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

    async deleteAluno(req, res) {
        const idAluno = req.params.id;
        const idSala = req.body.roomId;

        
        const user = await aluno.findByPk(idAluno);
        
        console.log(idSala);
        
        if (user != null) 
            await user.destroy();


        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome'],
        });

        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Foto'],
            where: { IDSala: idSala }
        });
        
        
        alunos.forEach(x => {
            console.log(x.Foto);
        })


        res.render('../views/index', {salas, id: idSala, alunos});
    }

}