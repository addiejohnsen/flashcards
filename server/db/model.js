const client = require('./index');

// get all decks from the decks table
const getDecks = (callback) => {
  const queryString = 'SELECT * FROM decks;';
  client.query(queryString, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result)
    }
  });
};

// get deck from the database based on deck_id number
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


module.exports = {
getDecks,
getCards
}
