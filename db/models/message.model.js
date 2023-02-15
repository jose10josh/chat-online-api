const {Schema} = require('mongoose');

const messageSchema = new Schema({
  user: {
    type: String,
    require: true
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