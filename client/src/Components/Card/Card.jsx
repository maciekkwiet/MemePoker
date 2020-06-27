import React from 'react';
import { useParams } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';
import { Box } from '@material-ui/core';

import { useUserContext } from 'Contexts/UserContext';
import CardStyles from './CardStyles';

const Card = ({ value, img }) => {
  const { name } = useUserContext();
  const sendEstimation = useEmit('USER_VOTED');
  const { roomId } = useParams();
  const classes = CardStyles();
  const onClickHandler = () => sendEstimation({ name, value, roomId });
  return (
    <Box className={classes.root}>
      <img src={img} alt={value} />
      <button type="button" onClick={onClickHandler}>
        {value}
      </button>
    </Box>
  );
};

export default Card;
