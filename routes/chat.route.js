const express = require('express');

const responses = require('../utils/response');
const ChatService = require('../services/chat.service');

const router = express.Router();
const service = new ChatService();


router.get('/:userId', async (req, res, next) => {
  try {
    const {userId} = req.params;
    const users = await service.find(userId);
    responses.success(req, res, users, 200);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let body = req.body;
    const response = await service.create(body);
    responses.success(req, res, response, 201);
  } catch (error) {
    next(error);
  }
});

module.exports = router;