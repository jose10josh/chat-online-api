
const boom = require('@hapi/boom');

const Model = require('../db/models/chat.model');


class ChatService {
  async find(userId) {
    let filters = {
      users: userId
    };

    const resp = await Model.find(filters).populate('users');
    return resp
  }

  async create(users) {
    const newChat = new Model(users);
    await newChat.save();
    return newChat;
  }
}

module.exports = ChatService;