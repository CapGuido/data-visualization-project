// src/server.js
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000; // You can use any port number you prefer

// Use corse to resolve cors issue
app.use(cors());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Route to serve JSON file
app.get('/api/data', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/db.json'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});