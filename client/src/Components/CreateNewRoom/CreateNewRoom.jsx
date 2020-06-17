import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../Contexts/UserContext';

const CreateNewRoom = () => {
  const sessionNumber = String(Math.round(Math.random() * 100));
  const { addAdmin } = useUserContext();

  return (
    <>
      <Link to={`/room/${sessionNumber}/join`}>
        <button onClick={() => addAdmin(true, sessionNumber)}>Create new session</button>
      </Link>
    </>
  );
};

export default CreateNewRoom;
