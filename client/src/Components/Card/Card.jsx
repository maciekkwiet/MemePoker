import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

import cardStyles from './CardStyles';
import { useBackend } from 'hooks/useBackend';

const MemeCard = ({ value, img, selected, selectCard, id }) => {
  const classes = cardStyles();
  const sendEstimation = useBackend('USER_VOTE');

  const onClickHandler = () => {
    sendEstimation({ value });
    selectCard(id);
  };

  return (
    <Card className={selected ? classes.selected : classes.main} variant="outlined">
      <CardActionArea onClick={onClickHandler}>
        <CardMedia className={classes.media} component="img" alt={value} src={img} height="50" />
        <CardContent className={classes.content}>
          <Typography className={classes.contentText} variant="body2">
            {value}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MemeCard;
