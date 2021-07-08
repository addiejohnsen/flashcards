import React from 'react';
import {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreateDeck from './CreateDeck';
import DeckList from './DeckList';
import CardList from './CardList';
import Navigation from './Navigation';
const axios = require('axios');

const useStyles = makeStyles({
  root: {
    marginLeft: 225,
    marginTop: 25
  },
})

const App = () => {
  const classes = useStyles();

  const [allDecks, setAllDecks] = useState([]);

  // GET ALL DECKS ON LOAD
const fetchAllDecks = () => {
  const url = 'http://localhost:3000/decks';
  axios.get(url)
  .then((results) => {
    setAllDecks(results.data);
  })
  .catch((err) => {
    console.error('Error: ', err);
  });
}

useEffect(()=>{
  fetchAllDecks();
}, []);


  return (
    <div>
      <h1>Welcome to Карточка! Давай начнём!</h1>
      <Navigation allDecks={allDecks} />
      <div className={classes.root}>
        <CreateDeck />
        <DeckList allDecks={allDecks}/>
        <CardList />
      </div>
    </div>
  );
};

export default App;
