import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  list: {
    display: 'inline',
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
    <React.Fragment>
      <Typography variant="h6">
        Let's study: {props.currentDeck.deck_name}
      </Typography>
      <Typography variant="body1">
        The decks covers:
      </Typography>
      {cardNames}
    </React.Fragment>

  );
};

export default DeckList;
