require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  development: {
    username: process.env.DB_USER || 'youruser',
    password: process.env.DB_PASSWORD || 'yourpassword',
    database: process.env.DB_NAME || 'yourdatabase',
    host: process.env.DB_HOST || 'db',
    dialect: 'mysql'
  },
  test: {
    username: process.env.DB_USER || 'youruser',
    password: process.env.DB_PASSWORD || 'yourpassword',
    database: process.env.DB_NAME_TEST || 'yourdatabase_test',
    host: process.env.DB_HOST || 'db',
    dialect: 'mysql'
  },
  prod: {
    username: process.env.DB_USER || 'youruser',
    password: process.env.DB_PASSWORD || 'yourpassword',
    database: process.env.DB_NAME_PRODUCTION || 'yourdatabase_production',
    host: process.env.DB_HOST || 'db',
    dialect: 'mysql'
  }
};
