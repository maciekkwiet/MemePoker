import React from 'react';
import { Grid } from '@material-ui/core';

import Card from 'Components/Card';
import pseudoCards from '../../views/Room/pseudoCards';

//To oczywiście będzie trzeba zastąpić
// const bonifacyNumbers = [1, 2, 3, 5, 8, 13, 21, 34];

const Cards = () => {
  return (
    <Grid item container>
      {pseudoCards.map((card) => (
        <Card key={card.id} value={card.value} img={card.img} />
      ))}
    </Grid>
  );
};

export default Cards;
