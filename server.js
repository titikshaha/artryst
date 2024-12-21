import express from 'express';
import path from 'path';
import multer from 'multer';

import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/' }); // Directory to save uploaded files

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'artsite/build')));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Artryst!');
});

// Handle artwork submissions (uploads)
app.post('/api/artworks', upload.single('image'), (req, res) => {
  const { type, title } = req.body;
  const image = req.file?.path; // Path to the uploaded image file

  if (!image || !type || !title) {
    return res.status(400).send('Missing required fields');
  }

  // Prepare new artwork data
  const newArtwork = { type, title, image };

  // Send back the uploaded artwork data as confirmation
  res.status(201).json(newArtwork);
});

// Handle writeup submissions (uploads)
app.post('/api/writeups', upload.fields([{ name: 'file' }, { name: 'coverImage' }]), (req, res) => {
  const { type, title } = req.body;
  const file = req.files?.file?.[0]?.path; // Path to the uploaded writeup file
  const coverImage = req.files?.coverImage?.[0]?.path; // Path to the cover image

  if (!file || !coverImage || !type || !title) {
    return res.status(400).send('Missing required fields');
  }

  // Prepare new writeup data
  const newWriteup = { type, title, file, coverImage };

  // Send back the uploaded writeup data as confirmation
  res.status(201).json(newWriteup);
});

// Serve React frontend for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'artsite/build/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
