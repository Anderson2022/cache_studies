const mongoose = require('mongoose');

const Task = new mongoose.Schema({
  title: String,
  done: Boolean
});
module.exports = mongoose.model('Task', Task);