import React from 'react';
import { useParams } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';
import { Grid, Box } from '@material-ui/core';

import { useUserContext } from 'Contexts/UserContext';
import cardStyles from './cardStyles';

const Card = ({ id, value, img }) => {
  const { name } = useUserContext();
  const sendEstimation = useEmit('USER_VOTED');
  const { roomId } = useParams();

  const classes = cardStyles();

  const onClickHandler = () => sendEstimation({ name, value, roomId });

  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Box className={classes.root}>
        <img src={img} alt={value} />
        <button type="button" onClick={onClickHandler}>
          {value}
        </button>
      </Box>
    </Grid>
  );
};

export default Card;
