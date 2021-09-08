const express = require('express');
const app = express();
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/subscribers');

// const db = mongoose.connection;

app.get('/', (req, res) => {
  res.send("We are on the home page");
});

app.get('/posts', (req, res) => {
  res.send("We are on the posts page");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

