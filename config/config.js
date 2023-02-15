const dotenv = require('dotenv');
dotenv.config();


const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser : process.env.DB_USER,
  dbPassword : process.env.DB_PASSWORD,
  dbName : process.env.DB_NAME,
  dbCluster : process.env.DB_CLUSTER,
}

module.exports = {config};