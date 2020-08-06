import React, { useState } from 'react';
import { useSocket } from 'socketio-hooks';

import CardsStyles from './CardsStyles';
import { cardsSchema } from './cardsSchema';
import Card from 'Components/Card';
import { useUserContext } from 'Contexts/UserContext';

const Cards = () => {
  const classes = CardsStyles();
  const { user } = useUserContext();

  const [selectedCard, setSelectedCard] = useState(null);

  const selectCard = id => {
    if (!user.isObserver) {
      setSelectedCard(id);
    }
  };

  useSocket('VOTES_CLEARED', () => {
    setSelectedCard(null);
  });

  return (
    <div className={classes.root}>
      {cardsSchema.map(card => (
        <Card
          key={card.id}
          {...card}
          className={classes.cards}
          selected={selectedCard === card.id}
          selectCard={selectCard}
        />
      ))}
    </div>
  );
};

export default Cards;
