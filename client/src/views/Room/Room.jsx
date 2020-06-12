import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import Cards from 'Components/Cards';
import { useUserContext } from 'Contexts/UserContext';

const Room = () => {
  const { name } = useUserContext();
  const { roomId } = useParams();

  if (!name) return <Redirect to={`/room/${roomId}/join`} />;

  return (
    <div>
      Main View <br /> <Cards />
    </div>
  );
};

export default Room;
