const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/artryst', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

const Artwork = require('./models/Artwork');
const Writeup = require('./models/Writeup');

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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});