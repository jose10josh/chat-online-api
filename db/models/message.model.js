const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user:{
    type: Schema.ObjectId,
    ref: 'User'
  },
  message: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true
  }
});

const model = mongoose.model('Message', messageSchema);
module.exports = model;