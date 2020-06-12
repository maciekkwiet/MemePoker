import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';

import { useUserContext } from 'Contexts/UserContext';

const UserNameInput = () => {
  const [name, setName] = useState('');
  const { changeName } = useUserContext();
  const { roomId } = useParams();
  const history = useHistory();
  const sendName = useEmit('USER_JOINED');

  const onClickHandler = () => {
    changeName(name);
    sendName({ name, roomId });
    history.push(`/room/${roomId}`);
  };
  const onInputHandler = ({ target: { value } }) => setName(value);

  return (
    <div>
      <input type="text" value={name} onInput={onInputHandler} />
      <button onClick={onClickHandler}>Let estimation begin!</button>
    </div>
  );
};

export default UserNameInput;
