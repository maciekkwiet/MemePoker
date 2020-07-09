import React from 'react';
import { useParams } from 'react-router-dom';

import { useUserContext } from 'Contexts/UserContext';
import InfoBox from 'Components/InfoBox/InfoBox';

const UserBox = () => {
  const { getUserName } = useUserContext();
  const { roomId } = useParams();

  const name = getUserName(roomId);

  return <InfoBox title="task name" value={name} align="left" />;
};

export default UserBox;
