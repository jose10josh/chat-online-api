const express = require('express');

const { config } = require('./config/config');
const routerApi = require('./routes/index.js');
const {connectDB} = require('./db/db');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const CLUSTER = config.dbCluster;
const URI = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.lztcgdo.mongodb.net/?retryWrites=true&w=majority`;
connectDB(URI, config.dbName);

const app = express();
const port = config.port;

app.use(express.json());


routerApi(app);

app.use('/app', express.static('public'));

app.listen(port, () => {
  console.log(`Server corriendo en: http://localhost:${port}` );
});