// Criando a estrutura da tabela do banco

const Sequelize = require('sequelize')
const database = require('../config/db')

const sala = database.define('Sala', 
{
    IDSala: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey: true
    },

    Nome: 
    {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Capacidade: 
    {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

    module.exports = sala;
