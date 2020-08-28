import React from 'react';

import CardsStyles from './CardsStyles';
import { cardsSchema } from './cardsSchema';
import Card from 'Components/Card';
import { useRoomContext } from 'Contexts/RoomContext';

const Cards = () => {
  const classes = CardsStyles();
  const { selectCard, selectedCard } = useRoomContext();
  return (
    <div className={classes.root}>
      {cardsSchema.map(card => (
        <Card key={card.id} {...card} selected={selectedCard === card.id} selectCard={selectCard} />
      ))}
    </div>
  );
};

export default Cards;
