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

    async alunoInsert(req, res) {
        const dados = req.body;
        // var select = dados.select;
        // var option = select.children[select.selectedIndex];
        // var texto = option.textContent;
        // console.log(texto);
        
        await aluno.create({
            Nome: dados.nome,
            Idade: dados.idade,
            Sexo: dados.genero,
            Foto: dados.imagem,
            IDSala: dados.selectSala
        });
    res.redirect('/');
    }
}