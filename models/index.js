'use strict';

const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host:process.env.DB_HOST,
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
