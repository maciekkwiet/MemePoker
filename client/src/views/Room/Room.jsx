import React from 'react';
import Cards from 'Components/Cards';
import { useHistory, useParams } from 'react-router-dom';
import { useUserContext } from 'Contexts/UserContext';

const Room = () => {
  const { name } = useUserContext();

  const { push } = useHistory();
  const { roomId } = useParams();

  if (!name) push(`/room/${roomId}/join`);
  return (
    <div>
      Main View <br /> <Cards />
    </div>
  );
};

export default Room;
