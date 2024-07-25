'use strict';

const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const configEnv = config[env];
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: configEnv.host,
  dialect: process.env.DB_HOST,
  logging: false, // Set to true to see SQL queries in console
});

const db = {};

// Import models
db.BasicEmployeeDetail = require('./basicEmployeeDetail')(sequelize, Sequelize.DataTypes);

// Add associations here if any
// e.g., db.ModelName.hasMany(db.OtherModel);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
