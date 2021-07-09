import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  shuffle: {
    marginTop: 15,
  },
  list: {
    display: 'inline',
  },
  wrapper: {
    marginBottom: 5,
    marginTop: 5,
  },
});

const DeckList = (props) => {
  const classes = useStyles();
  console.log(props.shuffleDeck);


  const cardNames = props.cards.map((card, index) => {
    return (
      <Typography variant='body2' className={classes.list}>
        <li className={classes.list} key={index}>{card.front}, </li>
      </Typography>
    )
  });

  return (
    <div>
      <Typography variant="h6">
        Let's study: {props.currentDeck.deck_name}
      </Typography>
      <Typography variant="body1">
        The decks covers:
      </Typography>
      <div className={classes.wrapper}>
        {cardNames}
      </div>
      <div className={classes.shuffle}>
          <Button variant="contained" onClick={props.shuffleDeck}>Shuffle Deck</Button>
        </div>
      <br />
    </div>

  );
};

export default DeckList;
