import React from 'react';
import { useParams } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';

import { useUserContext } from 'Contexts/UserContext';

const Card = ({ value }) => {
  const { name } = useUserContext();
  const { roomId } = useParams();
  const sendEstimation = useEmit('USER_VOTED');

  const onClickHandler = () => sendEstimation({ name, value, roomId });
  return (
    <button type="button" onClick={onClickHandler}>
      {value}
    </button>
  );
};

export default Card;
