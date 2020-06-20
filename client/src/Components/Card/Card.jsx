import React from 'react';
import { useParams } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';
import { Grid } from '@material-ui/core';

import { useUserContext } from 'Contexts/UserContext';

const Card = ({ id, value, img }) => {
  const { name } = useUserContext();
  const sendEstimation = useEmit('USER_VOTED');
  const { roomId } = useParams();

  const onClickHandler = () => sendEstimation({ name, value, roomId });

  return (
    <Grid item xs={6} md={4} lg={2}>
      <button type="button" onClick={onClickHandler}>
        {value}
      </button>
      <img src={img} alt={value} />
    </Grid>
  );
};

export default Card;
