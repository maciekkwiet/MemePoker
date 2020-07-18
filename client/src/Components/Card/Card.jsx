import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

import { useUserContext } from 'Contexts/UserContext';
import cardStyles from './CardStyles';

const MemeCard = ({ value, img }) => {
  const { getUserName } = useUserContext();
  const sendEstimation = useEmit('USER_VOTED');
  const { roomId } = useParams();
  const classes = cardStyles();

  const [selected, setSelected] = useState(false);

  const name = getUserName(roomId);

  const onClickHandler = e => {
    sendEstimation({ name, value, roomId });
    setSelected(!selected);
    console.log(selected);
  };

  return (
    <Card className={selected ? classes.maintwo : classes.main} variant="outlined">
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
