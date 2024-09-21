import mongoose from 'mongoose';

const writeupSchema = new mongoose.Schema({
  type: String,
  file: String,
  coverImage: String, // This stores the path to the image file
  title: String
});

const Writeup = mongoose.model('Writeup', writeupSchema);

export default Writeup;
