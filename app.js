const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("We are on the home page");
});

app.get('/posts', (req, res) => {
  res.send("We are on the posts page");
});

app.listen(3000);

