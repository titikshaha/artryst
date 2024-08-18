const mongoose = require('mongoose');

const writeupSchema = new mongoose.Schema({
  type: String,
  file: String, // This might be a URL or path to the uploaded file
  coverImage: String, // This might be a URL or path to the cover image
  title: String,
});

const Writeup = mongoose.model('Writeup', writeupSchema);

module.exports = Writeup;
