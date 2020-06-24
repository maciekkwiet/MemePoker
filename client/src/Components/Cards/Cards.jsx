import React from 'react';

import Card from 'Components/Card';
import pseudoCards from './pseudoCards';
import CardStyles from './CardsStyles';

//To oczywiście będzie trzeba zastąpić
// const bonifacyNumbers = [1, 2, 3, 5, 8, 13, 21, 34];

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
