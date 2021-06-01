const sequelize = require('sequelize')
const config = require("../config/database")

const conexao = new Sequelize(config);

module.exports = conexao;