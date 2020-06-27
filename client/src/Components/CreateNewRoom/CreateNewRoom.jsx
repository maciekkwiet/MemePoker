import React from 'react';
import { Link } from 'react-router-dom';

const CreateNewRoom = () => {
  const sessionId = String(Math.round(Math.random() * 100));

  return (
    <>
      <Link to={{ pathname: `/room/${sessionId}/join`, state: { isAdmin: true } }}>
        <button>Create new session</button>
      </Link>
    </>
  );
};

export default CreateNewRoom;
