import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from 'Contexts/UserContext';

const CreateNewRoom = () => {
  const sessionId = String(Math.round(Math.random() * 100));
  const { setAsAdmin } = useUserContext();

  return (
    <>
      <Link to={`/room/${sessionId}/join`}>
        <button onClick={() => setAsAdmin(sessionId)}>Create new session</button>
      </Link>
    </>
  );
};

export default CreateNewRoom;
