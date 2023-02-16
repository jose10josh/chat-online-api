const express = require('express');

const messagesRoute = require('./message.route');
const userRoute = require('./user.route');
const chatRoute = require('./chat.route');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/messages', messagesRoute);
  router.use('/users', userRoute);
  router.use('/chats', chatRoute);

}


module.exports = routerApi;