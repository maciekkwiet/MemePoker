const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: null,
  },
  room: {
    type: Number,
  },
});

const User = mongoose.model('User', userSchema);

exports.User = User;
