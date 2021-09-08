const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("We are on the home page");
})

app.listen(3000);

