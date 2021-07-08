const path = require('path');
const express = require('express');
const client = require('./db/index');
const models = require('./db/model');
const axios = require('axios');
const PORT = 3000;

const app = express();
// const url = 'http://localhost:3000';

app.use(express.static(path.join(__dirname, '..', 'dist')));

// ROUTES
app.get('/decks', (req, res) => {
  models.getAllDecks((err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(result.rows);
      res.status(200).send('test')
    }
  });
});
deck_id = 1;
app.get('/cards', (req, res) => {
  models.getCards(deck_id, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(result.rows);
      res.status(200).send('success');
    }
  });
});

app.listen(PORT, () => {
  console.log('Server is listening,');
});
