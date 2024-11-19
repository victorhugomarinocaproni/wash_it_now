const dotenv = require('dotenv')
dotenv.config()

// OBS: Este arquivo é utilizado pelo sequelize-cli para coletar as configurações da nossa Database.
// Portanto, esse arquivo de config NÃO É da nossa aplicação!!! 

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "dialectOptions": {
      charset: 'utf8mb4',
    },
    "logging": true,
    "define": {
      timestamps: true,
      underscore: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
  },
};
