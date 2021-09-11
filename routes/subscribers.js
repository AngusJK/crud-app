const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// get all
router.get('/', (req, res) => {
  res.send("Hello world");
});

// get one
router.get('/:id', (req, res) => {
  res.send(req.params.id);
});

// create one
router.post('/', (req, res) => {

});

// update
router.patch('/:id', (req, res) => {

});

// delete one
router.delete('/:id', (req, res) => {

});

module.exports = router;