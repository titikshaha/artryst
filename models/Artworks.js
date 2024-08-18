const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  type: String,
  image: String,
  title: String,
});

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;
