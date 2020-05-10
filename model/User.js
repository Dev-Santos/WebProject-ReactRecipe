var Sequelize = require("sequelize");
const db = require('../config/database');

//User Model

const User = db.define('test' , {
        name:{
            type: Sequelize.TEXT
        }
    },{
        timestamps: false
    });

module.exports = User;