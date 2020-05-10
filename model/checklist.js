var Sequelize = require("sequelize");
const db = require('../config/database');

//checklist Model

const checklist = db.define('checklist' , {
    item:{
        type: Sequelize.TEXT
    }
},{
    timestamps: false
});


module.exports = checklist;