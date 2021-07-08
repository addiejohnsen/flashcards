import React, { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';
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
  const [currentDeck, setCurrentDeck] = useState({
    id: 2, deck_name: 'Colors', deck_practice_needed: true, deck_practice_sessions: 0,
  });

  // GET ALL DECKS ON LOAD
  const fetchAllDecks = () => {
    axios.get('http://localhost:3000/decks')
      .then((results) => {
        setAllDecks(results.data);
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  };

  const clickDeck = (e) => {
    setCurrentDeck(allDecks[e.target.id]);
    console.log('clicked deck');
  };

  useEffect(() => {
    fetchAllDecks();
  }, []);

  return (
    <div>
      <h1>Welcome to Карточка! Давай начнём!</h1>
      <Navigation allDecks={allDecks} clickDeck={clickDeck} />
      <div className={classes.root}>
        <CreateDeck />
        <CardList currentDeck={currentDeck} />
      </div>
    </div>
  );
};

export default App;
