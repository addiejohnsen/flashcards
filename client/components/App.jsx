import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreateDeck from './CreateDeck';
import CardList from './CardList';
import Navigation from './Navigation';

const axios = require('axios');

const useStyles = makeStyles({
  root: {
    marginLeft: 225,
    marginTop: 25,
  },
});

const App = () => {
  const classes = useStyles();
  const [allDecks, setAllDecks] = useState([]);
  const [cards, setCards] = useState([]);
  const [currentDeck, setCurrentDeck] = useState({
    id: 1, deck_name: 'Verbs of Motion', deck_practice_needed: true, deck_practice_sessions: 0,
  });
  const [currentDeckId, setCurrentDeckId] = useState();

  // GET ALL DECKS ON LOAD
  const fetchAllDecks = () => {
    axios.get('http://localhost:3000/decks')
      .then((results) => {
        setAllDecks(results.data);
        setCurrentDeck(results.data[0]);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  };

  const clickDeck = (e) => {
    setCurrentDeck(allDecks[e.target.id]);
    setCurrentDeckId(allDecks[e.target.id].id);
  };

  const fetchCards = (deckId) => {
    axios.get(`http://localhost:3000/deckcards/${deckId}`)
      .then((results) => {
        console.log('card results: ', results.data);
        setCards(results.data);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  };

  //  Create New Deck
  const createNewDeck = (newDeckName) => {
    axios.post('http://localhost:3000/decks', { deckName: newDeckName })
      .then((results) => {
        setCurrentDeckId(results.data);
        fetchAllDecks();
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  };

  // Create new card
  const createNewCard = (newCard) => {
    axios.post('http://localhost:3000/cards', newCard)
      .then(() => {
        fetchCards(currentDeckId);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  };

  useEffect(() => {
    fetchAllDecks();
  }, []);

  useEffect(() => {
    fetchCards(currentDeck.id);
  }, [currentDeck.id]);

  useEffect(() => {
    // setCurrentDeck(allDecks[index]);
  }, [currentDeckId]);

  return (
    <div>
      <h1>Welcome to Карточка! Давай начнём!</h1>
      <Navigation allDecks={allDecks} clickDeck={clickDeck} />
      <div className={classes.root}>
        <CreateDeck
          createNewDeck={createNewDeck}
          currentDeckId={currentDeckId}
          createNewCard={createNewCard}
          fetchCards={fetchCards}
        />
        <CardList
          currentDeck={currentDeck}
          fetchCards={fetchCards}
          cards={cards}
        />
      </div>
    </div>
  );
};

export default App;
