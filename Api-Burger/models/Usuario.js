const db = require('./db.js');

//Criando tabela
const Usuario = db.sequelize.define('usuario',{
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    cliente: {
        type: db.Sequelize.STRING,
        allowNull:false,
    },
 
    pao: {
        type: db.Sequelize.STRING,
        allowNull:false,
    },
    carne: {
        type: db.Sequelize.STRING,
        allowNull:false,
    },
    bacon: {
        type: db.Sequelize.STRING,
        allowNull:false,
    },
    salame: {
        type: db.Sequelize.STRING,
        allowNull:false,
    },
    cebola: {
        type: db.Sequelize.STRING,
        allowNull:false,
    },
    chedar: {
        type: db.Sequelize.STRING,
        allowNull:false,
    },
    pepino: {
        type: db.Sequelize.STRING,
        allowNull:false,
    },
 
})
Usuario.sync();

module.exports = Usuario;