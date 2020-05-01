var Sequelize = require("sequelize");

//DB Credentials

module.exports = new Sequelize('a6XERCK5OC', 'a6XERCK5OC', 'Bqws3gKffQ', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

/*module.exports = new Sequelize('webprojdb', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});*/
