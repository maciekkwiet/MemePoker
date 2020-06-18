import React from 'react';

import Card from 'Components/Card';

//To oczywiście będzie trzeba zastąpić
const bonifacyNumbers = [1, 2, 3, 5, 8, 13, 21, 34];

const Cards = () => {
  return (
    <div>
      {bonifacyNumbers.map((value) => (
        <p key={value}>
          <Card value={value} />
        </p>
      ))}
    </div>
  );
};

export default Cards;
