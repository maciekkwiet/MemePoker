import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import Cards from 'Components/Cards';
import { useUserContext } from 'Contexts/UserContext';

const Room = () => {
  const { roomId } = useParams();
  const { defaultName } = useUserContext();
  //Jeżeli nie ma uczestnia to przekieruj żeby uzytkownik sie wpisał
  if (!defaultName) return <Redirect to={`/room/${roomId}/join`} />;

  return (
    <div>
      Main View <br /> <Cards />
    </div>
  );
};

export default Room;
