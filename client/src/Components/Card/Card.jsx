import React from 'react';
import { useParams } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';

import { useUserContext } from 'Contexts/UserContext';

const Card = ({ value }) => {
  const { name } = useUserContext();
  const sendEstimation = useEmit('USER_VOTED');
  const { roomId } = useParams();

  const onClickHandler = () => sendEstimation({ name, value, roomId });

  return (
    <button type="button" onClick={onClickHandler}>
      {value}
    </button>
  );
};

export default Card;
