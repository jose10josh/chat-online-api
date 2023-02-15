const boom = require('@hapi/boom');

const Model = require('../db/models/user.model');


class UserService {
  async find() {
    const resp = await Model.find();
    return resp
  }

  async findOne(id) {
    const resp = await Model.findByid(id);
    if(!resp) {
      throw boom.notFound('User not found - id: ' + id)
    }
    return resp
  }

  async create(user) {
    const newUser = new Model(user);
    await newUser.save();
    return newUser;
  }

  async update(id, name) {
    const myUser = await this.findOne(id);
    myUser.name = name;
    await myUser.save();

    return myUser;
  }

  async delete(id) {
    await Model.deleteOne({_id: id});
    return {message: "User deleted correctly."};
  }
}

module.exports = UserService;