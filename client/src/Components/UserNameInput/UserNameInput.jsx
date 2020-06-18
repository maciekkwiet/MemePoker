import React, { useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useEmit } from 'socketio-hooks';

import { useUserContext } from 'Contexts/UserContext';

const UserNameInput = () => {
  const [name, setName] = useState('');
  const { changeName, admins } = useUserContext();

  const { roomId } = useParams();
  const history = useHistory();

  const sendName = useEmit('USER_JOINED');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const admin = admins.findIndex((user) => user.adminroomId === roomId);
    if (~admin) {
      const adminexist = true;
      changeName(name, roomId);
      sendName({ name, roomId, adminexist });
    } else {
      const adminexist = false;
      changeName(name, roomId);
      sendName({ name, roomId, adminexist });
    }
    history.push(`/room/${roomId}`);
  };
  const onInputHandler = ({ target: { value } }) => setName(value);

  return (
    <>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <label htmlFor="name">Your name: </label>
        <input id="name" name="name" type="text" value={name} onInput={onInputHandler} />
        <button type="submit">Let estimation begin!</button>
      </form>
      <Link to={`/3000`}>
        <button>Go back</button>
      </Link>
    </>
  );
};

export default UserNameInput;
