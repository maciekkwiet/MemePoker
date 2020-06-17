import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const JoinRoom = () => {
  const [roomId, setRoomId] = useState('');

  //push to przejście do  kolejnej jstrony
  const { push } = useHistory();

  const onInputHandler = ({ target: { value } }) => setRoomId(value);

  const connectToRoom = () => {
    push(`/room/${roomId}/join`);
  };

  return (
    <form onSubmit={connectToRoom}>
      <label htmlFor="roomId">Type room name to join</label>
      <input name="roomId" id="roomId" type="text" value={roomId} onChange={onInputHandler} />
    </form>
  );
};

export default JoinRoom;
