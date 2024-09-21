import mongoose from 'mongoose';

const artworkSchema = new mongoose.Schema({
  type: String,
  image: String,
  title: String,
});

const Artwork = mongoose.model('Artwork', artworkSchema);

export default Artwork;
