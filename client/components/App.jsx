import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreateDeck from './CreateDeck';
import DeckList from './DeckList';
import CardList from './CardList';
import Navigation from './Navigation';
const axios = require('axios');

const useStyles = makeStyles({
  root: {
    marginLeft: 175,
    marginTop: 25
  },
})

const App = () => {
  const classes = useStyles();

  const url = 'http://localhost:3000/api/get';
  axios.get(url)
    .then((results) => {
      console.log('test')
    })
    .catch((err) => {
      console.error('Error: ', err);
    });

  return (
    <div>
      <h1>Welcome to Карточка! Давай начнём!</h1>
      <Navigation />
      <div className={classes.root}>
        <CreateDeck />
        <DeckList />
        <CardList />
      </div>
    </div>
  );
};

export default App;
