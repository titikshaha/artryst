import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import multer from 'multer';
import { fileURLToPath } from 'url';
import Artwork from './models/Artworks.js';
import Writeup from './models/Writeup.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/' }); // Specify the directory to save uploaded files

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/artryst', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Artryst!');
});

// API routes
app.get('/api/artworks', async (req, res) => {
  try {
    const artworks = await Artwork.find();
    res.json(artworks);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/api/writeups', async (req, res) => {
  try {
    const writeups = await Writeup.find();
    res.json(writeups);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Handle artwork submissions
app.post('/api/artworks', upload.single('image'), async (req, res) => {
  try {
    const { type, title } = req.body;
    const image = req.file.path; // Path to the uploaded file

    const artwork = new Artwork({
      type,
      image,
      title,
    });

    await artwork.save();
    res.status(201).json(artwork);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Handle writeup submissions
app.post('/api/writeups', upload.fields([{ name: 'file' }, { name: 'coverImage' }]), async (req, res) => {
  try {
    const { type, title } = req.body;
    const file = req.files['file'][0]?.path; // Path to the uploaded file
    const coverImage = req.files['coverImage'][0]?.path; // Path to the cover image

    if (!file || !coverImage) {
      return res.status(400).send('File or cover image not uploaded');
    }

    const writeup = new Writeup({
      type,
      file,
      coverImage,
      title,
    });

    await writeup.save();
    res.status(201).json(writeup);
  } catch (err) {
    res.status(500).send(err);
  }
});


// Serve static files from the React app
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'artsite/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'artsite/build/index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
