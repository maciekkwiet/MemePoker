import React, { useState } from 'react';
import { Link, useLocation, useParams, useHistory } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';

import { useUserContext } from 'Contexts/UserContext';

const UserNameInput = () => {
  const history = useHistory();
  const { roomId } = useParams();
  const { state } = useLocation();

  const { defaultName, upsertRoomInfo } = useUserContext();
  const [name, setName] = useState(defaultName);

  const emitUserJoined = useEmit('USER_JOINED');

  const isAdmin = state?.isAdmin ?? false;

  const onSubmitHandler = (e) => {
    e.preventDefault();

    upsertRoomInfo(roomId, name, isAdmin);
    emitUserJoined({ name, roomId, isAdmin });

    history.push(`/room/${roomId}`);
  };

  const onChangeHandler = ({ target: { value } }) => setName(value);

  return (
    <>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <label htmlFor="name">Your name: </label>
        <input id="name" name="name" type="text" value={name} onChange={onChangeHandler} />
        <button type="submit">Let estimation begin!</button>
      </form>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </>
  );
};

export default UserNameInput;
