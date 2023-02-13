const express = require('express');

const routerApi = require('./routes/index.js');


const app = express();
const port = 3000;

app.use(express.json());


routerApi(app);

app.listen(port, () => {
  console.log(`Server corriendo en: http:77localhost:${port}` );
});