const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('crud', 'root', '123321',
// const database = new sequelize('crud', 'crud123', 'crud123456789',
{
dialect: 'mysql', host:'localhost', port: 3306
});
database.sync();
module.exports = database;