import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

import cardStyles from './CardStyles';
import { useBackend } from 'hooks/useBackend';
import { useUserContext } from 'Contexts/UserContext';

const MemeCard = ({ value, img, selected, selectCard, id, analysis }) => {
  const classes = cardStyles();
  const sendEstimation = useBackend('USER_VOTE');
  const { user } = useUserContext();

  const onClickHandler = () => {
    if (!user.isObserver) {
      sendEstimation({ value });
      selectCard(id);
    }
  };

  return (
    <Card className={`${classes.root} ${selected ? classes.selected : classes.main}`} variant="outlined">
      <CardActionArea
        onClick={analysis && !selected ? '' : onClickHandler}
        className={`${classes.button} ${user.isObserver ? classes.cards : ''}`}
      >
        <CardMedia className={classes.media} component="img" alt={value} src={img} />
        <CardContent className={classes.content}>
          <Typography className={classes.contentText} variant="h6">
            {value}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MemeCard;
