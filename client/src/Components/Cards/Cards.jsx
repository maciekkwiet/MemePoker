import React from 'react';
import Card from '../Card';

const cardsValues = [1, 2, 3, 5, 8, 13, 21, 34];

const Cards = () => {
  return (
    <div>
      {cardsValues.map((value) => (
        <p key={value}>
          <Card value={value} />
        </p>
      ))}
    </div>
  );
};

export default Cards;
