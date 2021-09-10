require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE_URL');

// const db = mongoose.connection;

// db.on('error', (error) => console.log(error));
// db.once('open', (error) => console.log("Connected to database"));

app.use(express.json());

const subscribersRouter = require('./routes/subscribers');

app.use('subscribers', subscribersRouter);

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

