import React from 'react';
import { Link } from 'react-router-dom';

const CreateNewRoom = () => {
  const sessionNumber = Math.round(Math.random() * 100);
  return (
    <>
      <Link to={`/room/${sessionNumber}/join`}>
        <button>Create new session</button>
      </Link>
    </>
  );
};

export default CreateNewRoom;
