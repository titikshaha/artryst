const mongoose = require('mongoose');

const writeupSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Writeup = mongoose.model('Writeup', writeupSchema);

module.exports = Writeup;
