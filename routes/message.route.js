const express = require('express');

const responses = require('../network/response');
const messageService = require('../services/message.service');

const router = express.Router();
const service = new messageService();


router.get('/', async (req, res, next) => {
  try {
    const messages = await service.find();
    // res.status(200).json(product);
    responses.success(req, res, messages, 200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;