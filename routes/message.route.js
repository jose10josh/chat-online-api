const express = require('express');

const responses = require('../utils/response');
const messageService = require('../services/message.service');

const router = express.Router();
const service = new messageService();


router.get('/', async (req, res, next) => {
  try {
    const { chatId } = req.query;
    const messages = await service.find(chatId||null)
    responses.success(req, res, messages, 200);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const response = await service.create(body);
    responses.success(req, res, response, 201);
  } catch (error) {
    next(error);
  }
});


router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    let body = req.body;

    const response = await service.update(id, body);
    responses.success(req, res, response, 200);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await service.delete(id);
    responses.success(req, res, response, 200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;