require('dotenv').config();
const Sequelize = require('sequelize');


// instance of sequelize
const sequelizeDB = new Sequelize('test', process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DATABASE_URL,
    port: '3306',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelizeDB;
