const express = require('express');

const { config } = require('./config/config');
const routerApi = require('./routes/index.js');
const {connectDB} = require('./db/db');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB = config.dbName;
const URI = `mongodb+srv://${USER}:${PASSWORD}@${DB}.lztcgdo.mongodb.net/?retryWrites=true&w=majority`;
connectDB(URI);

const app = express();
const port = 3000;

app.use(express.json());


routerApi(app);

app.listen(port, () => {
  console.log(`Server corriendo en: http://localhost:${port}` );
});