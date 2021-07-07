import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreateDeck from './CreateDeck';
import DeckList from './DeckList';
import CardList from './CardList';
import Navigation from './Navigation';

const useStyles = makeStyles({
  root: {
    marginLeft: 175,
    marginTop: 25
  },
})

const App = () => {
  const classes = useStyles();

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
