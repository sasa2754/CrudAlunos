const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('crud', 'crud123', 'crud123456789', //Lembra de atualizar o username e password caso mude para MySQL
{
dialect: 'mssql', host:'localhost', port: 1433 //SQL SERVER
// dialect: 'mysql', host:'localhost', port: 3306 //MY SQL
});
database.sync();
module.exports = database;