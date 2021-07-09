import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import DeckList from './DeckList';

const CardList = (props) => {
  // currentDeck = props.currentDeck
  const cardCard = props.cards.map((card, index) => {
    return (
      <CardItem card={card} key={index} />
    )
  });

  return (
    <React.Fragment>
      <DeckList cards={props.cards} currentDeck={props.currentDeck} />
      {cardCard}
    </React.Fragment>
  );
};

export default CardList;
// const fetchCards = props.fetchCards;
// useEffect(() => {
//   fetchCards(props.currentDeck.id);
// }, [props.currentDeck.id]);
{/* {props.cards.map((card, index) => {
  return (
    <CardItem card={card} key={index} />
    )
    // fetch cards for current deck
    // const fetchCards = (deckId) => {
    //   axios.get(`http://localhost:3000/deckcards/${deckId}`)
    //     .then((results) => {
    //       console.log('card results: ', results.data);
    //       setCards(results.data);
    //     })
    //     .catch((err) => {
    //       console.error('Error: ', err);
    //     });
    // };

    // useEffect(() => {
    //   fetchCards(props.currentDeck.id);
    // }, []);
})} */}