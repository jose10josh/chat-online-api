const express = require('express');

const messagesRoute = require('./message.route');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/messages', messagesRoute);

}


module.exports = routerApi;