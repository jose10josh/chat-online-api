const express = require('express');

const messagesRoute = require('./message.route');
const userRoute = require('./user.route');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/messages', messagesRoute);
  router.use('/users', userRoute);

}


module.exports = routerApi;