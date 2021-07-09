import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  box: {
    marginTop: 25,
    marginBottom: 75,
  },
  btn: {
    marginTop: 8,
    marginBottom: 8,
  },
  field: {
    marginRight: 8,
  },
});
const CreateDeck = (props) => {
  const classes = useStyles();
  // const [currentDeckId, setCurrentDeckId] = useState([]);
  const [name, setName] = useState('');
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const handleDeckName = (e) => {
    setName(e.target.value);
  };

  const handleDeckClick = () => {
    props.createNewDeck(name);
  };

  const handleCardFront = (e) => {
    setFront(e.target.value);
  };

  const handleCardBack = (e) => {
    setBack(e.target.value);
  };

  const handleCardSubmission = (e) => {
    const newCard = {
      deck_id: props.currentDeckId,
      front: front,
      back: back,
      card_practice_sessions: 0,
    };
    props.createNewCard(newCard);
    console.log(newCard);
  };

  return (
    <div className={classes.box}>
      <Typography variant="h5">Get started with a new deck!</Typography>
      <form>
        <TextField
          id="deck"
          label="Name of Deck"
          name="deck"
          value={name}
          onChange={handleDeckName}
          variant="outlined"
        />
        <br />
        <Button
          className={classes.btn}
          variant="contained"
          onClick={handleDeckClick}
        >
          Create Deck!
        </Button>
      </form>
      <br />
      <br />
      <Typography>Click your deck on the left before adding cards!</Typography>
      <TextField
       className={classes.field}
        id="front"
        label="Front of Card"
        name="cardFront"
        value={front}
        onChange={handleCardFront}
        variant="outlined"
      />
      <TextField
        id="back"
        label="Back of Card"
        name="cardBack"
        value={back}
        onChange={handleCardBack}
        variant="outlined"
      />
      <br />
      <Button
        variant="contained"
        className={classes.btn}
        onClick={handleCardSubmission}
      >
        Add Card!
      </Button>
    </div>
  );
};

export default CreateDeck;
