import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardsStyles from './CardsStyles';
import { pseudoCards } from './pseudoCards';
import { Paper, CardContent } from '@material-ui/core';

//To oczywiście będzie trzeba zastąpić
// const bonifacyNumbers = [1, 2, 3, 5, 8, 13, 21, 34];

const Cards = () => {
  const classes = CardsStyles();

  return (
    <div className={classes.root}>
      {pseudoCards.map(card => (
        <Card className={classes.main} variant="outlined">
          <CardActionArea>
            <CardMedia className={classes.media} component="img" alt="image" src={card.img} height="50" />
            <CardContent className={classes.content}>
              <Typography className={classes.contentText} variant="body2">
                {card.value}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
