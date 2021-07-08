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
// get all decks
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
app.get('/deckcards', (req, res) => {
  deck_id = 1;
  models.getCards(deck_id, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(result.rows);
      res.status(200).send('success');
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
      res.status(200).send('test')
    }
  });
});

// get all cards that need practice
app.get('/practice/cards', (req, res) => {
  deck_id = 1;
  models.getCardsNeedPractice(deck_id, (err, result) => {
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
  // get deck name from request

  models.createDeck(deck_name, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send('Deck created')
    }

  });
});

// Add a card
app.post('/cards', (req, res) => {
  // create new card - follow this format - get card info from request
/*card {
  deck_id: id,
  front: front,
  back: back
  card_practice_sessions: 0
}
*/

  models.createCard(card, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send('Card created')
    }
  });
});

app.listen(PORT, () => {
  console.log('Server is listening,');
});
