import React from 'react';
import { useParams } from 'react-router-dom';
import { useEmit, useSocket } from 'socketio-hooks';

const Card = ({ value }) => {
  const { roomId } = useParams();
  const sendEstimation = useEmit('VOTE');
  useSocket('VOTED', (msg) => console.log(msg));

  const onClickHandler = () => sendEstimation({ name: 'Jon Snow', value, room: roomId });

  return (
    <button type="button" onClick={onClickHandler}>
      {value}
    </button>
  );
};

export { Card };
