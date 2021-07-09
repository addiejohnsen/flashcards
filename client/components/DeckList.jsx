import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  list: {
    display: 'inline',
  },
  wrapper: {
    bottomMargin: 5,
    topMargin: 5,
  },
});

const DeckList = (props) => {
  const classes = useStyles();

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
      <br />
    </div>

  );
};

export default DeckList;
