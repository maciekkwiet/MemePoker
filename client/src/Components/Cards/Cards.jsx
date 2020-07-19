import React, { useState } from 'react';

import CardsStyles from './CardsStyles';
import { cardsSchema } from './cardsSchema';
import Card from 'Components/Card';

const Cards = () => {
  const classes = CardsStyles();

  const [clear, setClear] = useState(false);

  const clearSelect = () => {
    console.log('wywolana');
    // dlaczego to sie nie chce przerenderować?
    setClear(!clear);
  };

  return (
    <div className={classes.root}>
      {cardsSchema.map(({ id, ...rest }) => (
        <Card key={id} {...rest} selected={clear} clearSelect={clearSelect} />
      ))}
    </div>
  );
};

export default Cards;
