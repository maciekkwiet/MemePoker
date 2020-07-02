import React from 'react';

import CardsStyles from './CardsStyles';
import { cardsSchema } from './cardsSchema';
import Card from 'Components/Card';

//To oczywiście będzie trzeba zastąpić
// const bonifacyNumbers = [1, 2, 3, 5, 8, 13, 21, 34];

const Cards = () => {
  const classes = CardsStyles();

  return (
    <div className={classes.root}>
      {cardsSchema.map(({ id, ...rest }) => (
        <Card key={id} {...rest} />
      ))}
    </div>
  );
};

export default Cards;
