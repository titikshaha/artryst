const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer'); // Add multer for file handling
const app = express();
const port = process.env.PORT || 5000;

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

// Models
const Artwork = require('./models/Artwork');
const Writeup = require('./models/Writeup');

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Artryst!');
});

app.get('/artworks', (req, res) => {
  res.send('Artworks page');
});

app.get('/writeups', (req, res) => {
  res.send('Writeups page');
});

app.get('/about', (req, res) => {
  res.send('About Me page');
});

app.get('/submissions', (req, res) => {
  res.send('Submissions page');
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
    const file = req.files['file'][0].path; // Path to the uploaded file
    const coverImage = req.files['coverImage'][0].path; // Path to the cover image

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
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
