const client = require('./index');

// get all decks from the decks table
const getAllDecks = (callback) => {
  const queryString = 'SELECT * FROM decks;';
  client.query(queryString, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result)
    }
  });
};

// get decks from the datbase based on need_practice = true
const getDecksNeedPractice = (callback) => {
  const queryString = `SELECT * FROM decks WHERE deck_practice_needed = 't';`;
  client.query(queryString, [deck_id], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result)
    }
  });
}

// get cards from the database based on deck_id number
const getCards = (deck_id, callback) => {
  const queryString = 'SELECT * FROM cards WHERE deck_id=$1;';
  client.query(queryString, [deck_id], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result)
    }
  });
}


// get cards from the datbase based on deck_id number where need to study = true
const getCardsNeedPractice = (deck_id, callback) => {
  const queryString = `SELECT * FROM cards WHERE deck_id=$1 AND card_practice_needed = 't';`;
  client.query(queryString, [deck_id], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result)
    }
  });
}

// get all cards from all decks
const getAllCards = (callback) => {
  const queryString = 'SELECT * FROM cards;';
  client.query(queryString, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, err);
    }
  });
};

// create new deck
const createDeck = (deck_name, callback) => {
  const queryString = 'INSERT INTO decks (deck_name, deck_practice_sessions) VALUES ($1, 0);';
  client.query(queryString, [deck_name], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

// create new card - follow this format
const createCard = (card, callback) => {
  const queryParam = [];
  queryParam.push(card.deck_id);
  queryParam.push(card.front);
  queryParam.push(card.back);
  queryParam.push(card.card_practice_sessions);
  const queryString = 'INSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES ($1, $2, $3, $4);';
  client.query(queryString, queryParam, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};




module.exports = {
  getAllDecks,
  getCards,
  getAllCards,
  getCardsNeedPractice,
  getDecksNeedPractice,
  createDeck,
  createCard
}
