import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const CreateDeck = (props) => {
  const [decks, setDecks] = useState([]);

  return (
    <React.Fragment>
      <h2>Create Deck Widget Goes Here </h2>
      <TextField id="deck" label="Name of Deck" variant="outlined"></TextField>
      <br />
      <Button>Create Deck!</Button>
      <br />
      <br />
      <TextField id="front" label="Front of Card" variant="outlined"></TextField>
      <TextField id="back" label="Back of Card" variant="outlined"></TextField>
      <br />
      <Button>Add Card!</Button>
    </React.Fragment>
  );
};

export default CreateDeck;
