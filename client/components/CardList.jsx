import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';

const axios = require('axios');

const CardList = (props) => {
  // currentDeck = props.currentDeck
  const [cards, setCards] = useState([]);

  // fetch cards for current deck
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

  useEffect(() => {
    fetchCards(props.currentDeck.id);
  }, [props.currentDeck.id]);

  return (
    <CardItem cards={cards} />
  );
};

export default CardList;
