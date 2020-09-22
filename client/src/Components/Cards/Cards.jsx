import React, { useState } from 'react';
import { useSocket } from 'socketio-hooks';

import CardsStyles from './CardsStyles';
import { cardsSchema } from './cardsSchema';
import Card from 'Components/Card';

const Cards = () => {
  const classes = CardsStyles();

  const [selectedCard, setSelectedCard] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const selectCard = id => {
    setSelectedCard(id);
  };

  useSocket('VOTES_CLEARED', () => {
    setSelectedCard(null);
    setAnalysis(null);
  });

  useSocket('ROOM_VOTES', ({ task }) => {
    setAnalysis(task.analysis);
  });

  return (
    <div className={classes.root}>
      {cardsSchema.map(card => (
        <Card key={card.id} {...card} selected={selectedCard === card.id} selectCard={selectCard} analysis={analysis} />
      ))}
    </div>
  );
};

export default Cards;
