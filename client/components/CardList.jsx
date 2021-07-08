import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import DeckList from './DeckList';

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

  // useEffect(() => {
  //   fetchCards(props.currentDeck.id);
  // }, []);

  useEffect(() => {
    fetchCards(props.currentDeck.id);
  }, [props.currentDeck.id]);

  return (
    <React.Fragment>
      <DeckList cards={cards} currentDeck={props.currentDeck}/>
      {cards.map((card, index) => {
        return (
          <CardItem card={card} key={index} />
        )
      })}
    </React.Fragment>
  );
};

export default CardList;
