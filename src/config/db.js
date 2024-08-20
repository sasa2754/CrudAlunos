const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('crud', 'crud123', 'crud123456789',
{
dialect: 'mssql', host:'localhost', port: 1433
});
database.sync();
module.exports = database;