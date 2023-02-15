const express = require('express');

const responses = require('../utils/response');
const UserService = require('../services/user.service');

const router = express.Router();
const service = new UserService();


router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
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