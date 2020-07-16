import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useUserContext } from 'Contexts/UserContext';
import { useRoomContext } from 'Contexts/RoomContext';
import { useSocket } from 'socketio-hooks';
import InfoBox from 'Components/InfoBox';

const UserBox = ({ head, text }) => {
  const { getUserName } = useUserContext();
  const { roomId } = useParams();
  
  useEffect(() => {
    if (response) {
      const { title } = response.room.task;

      if (title) setTask(title);
    }
  }, [response]);

  useSocket('TASK_UPDATED', ({ title }) => setTask(title));

  const name = getUserName(roomId);

  return <InfoBox title={task} value={name} align="left" />;
};

export default UserBox;
