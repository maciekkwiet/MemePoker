import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import Cards from 'Components/Cards';
import { useUserContext } from 'Contexts/UserContext';

const Room = () => {
  const { roomId } = useParams();
  const { getUserName } = useUserContext();

  const name = getUserName(roomId);
  //Jeżeli nie ma uczestnia to przekieruj żeby uzytkownik sie wpisał
  if (!name) return <Redirect to={`/room/${roomId}/join`} />;

  return (
    <div>
      {name}
      Main View <br /> <Cards />
    </div>
  );
};

export default Room;
