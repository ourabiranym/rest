const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone:{
    type: Number,
    required: true,
  }
});
const User = mongoose.model("User", userSchema);

module.exports = User;