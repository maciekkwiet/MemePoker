import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

import { useUserContext } from 'Contexts/UserContext';
import cardStyles from './CardStyles';
import { useBackend } from 'hooks/useBackend';

const MemeCard = ({ value, img }) => {
  const classes = cardStyles();

  const { getUserName } = useUserContext();
  const { roomId } = useParams();
  const sendEstimation = useBackend('USER_VOTE');

  const name = getUserName(roomId);

  const onClickHandler = () => sendEstimation({ name, value, roomId });

  return (
    <Card className={classes.main} variant="outlined">
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
