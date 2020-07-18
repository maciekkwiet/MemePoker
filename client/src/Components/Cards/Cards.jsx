import React from 'react';

import CardsStyles from './CardsStyles';
import { cardsSchema } from './cardsSchema';
import Card from 'Components/Card';

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
