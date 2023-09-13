const Sequelize = require('sequelize');

// db instance or connection
const sequelizeDB = require('../utils/db');


// Model
const User = sequelizeDB.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    department: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salary: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = User;