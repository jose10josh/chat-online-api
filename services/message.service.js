
const boom = require('@hapi/boom');

const Model = require('../db/models/message.model');


class MessageService {
  async find(chatId) {
    let filters = {};
    if(chatId !== null) {
      filters = {chat: chatId}
    }
    const resp = await Model.find(filters).populate('user');
    return resp
  }

  async findOne(id) {
    const resp = await Model.findByid(id);
    if(!resp) {
      throw boom.notFound('Message not found - id: ' + id)
    }
    return resp
  }

  async create(message) {
    message.date = new Date();
    const newMessage = new Model(message);
    await newMessage.save();
    return newMessage;
  }

  async update(id, message) {
    const myMessage = await this.findOne(id);
    myMessage.message = message;
    await myMessage.save();

    return myMessage;
  }

  async delete(id) {
    await Model.deleteOne({_id: id});
    return {message: "Message deleted correctly."};
  }
}

module.exports = MessageService;