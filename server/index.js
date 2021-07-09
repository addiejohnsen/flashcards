const path = require('path');
const axios = require('axios');
const express = require('express');
const client = require('./db/index');
const models = require('./db/model');

const PORT = 3000;

const app = express();
// const url = 'http://localhost:3000';
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));

// ROUTES
// get all decks
app.get('/decks', (req, res) => {
  models.getAllDecks((err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(result.rows);
      res.status(200).send(result.rows);
    }
  });
});

// get all cards
app.get('/cards', (req, res) => {
  models.getAllCards((err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(result.rows);
      res.status(200).send('success');
    }
  });
});

// get cards from a certain deck
app.get('/deckcards/:deck_id', (req, res) => {
  const deckId = req.params.deck_id;
  models.getCards(deckId, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(result.rows);
      res.status(200).send(result.rows);
    }
  });
});

// get all decks that need practice
app.get('/practice/decks', (req, res) => {
  models.getDecksNeedPractice((err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(result.rows);
      res.status(200).send('test');
    }
  });
});

// get all cards that need practice
app.get('/practice/cards', (req, res) => {
  const deckId = 1;
  models.getCardsNeedPractice(deckId, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(result.rows);
      res.status(200).send('success');
    }
  });
});

// POST

// Add a new deck to the database
app.post('/decks', (req, res) => {
  models.createDeck(req.body.deckName, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(result.rows[0].id);
      const num = result.rows[0].id;
      res.status(200).json(num);
    }
  });
});

// Add a card
app.post('/cards', (req, res) => {
  // create new card - follow this format - get card info from request
  models.createCard(req.body, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send('Card created');
    }
  });
});

app.listen(PORT, () => {
  console.log('Server is listening,');
});
