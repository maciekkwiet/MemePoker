import React from 'react';

import Card from 'Components/Card';
import pseudoCards from './pseudoCards';
import CardStyles from './CardsStyles';

const Cards = () => {
  const classes = CardStyles();

  return (
    <div className={classes.root}>
      {pseudoCards.map(card => (
        <Card key={card.id} value={card.value} img={card.img} />
      ))}
    </div>
  );
};

export default Cards;
