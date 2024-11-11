const { Sequelize } = require('sequelize');
const dbConfig  = require('../config/config.js');

const Usuario = require('./models/Usuario.js');

const sequelize = new Sequelize('wash_it_now_db', 'root', 'teste123', {
    host: 'localhost',
    dialect: 'mysql',
});

Usuario.init(sequelize);

module.exports = sequelize;
