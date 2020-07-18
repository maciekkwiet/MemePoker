import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useUserContext } from 'Contexts/UserContext';
import { useRoomContext } from 'Contexts/RoomContext';
import { useSocket } from 'socketio-hooks';
import InfoBox from 'Components/InfoBox';

const UserBox = () => {
  const [task, setTask] = useState('waiting for first task');
  const { getUserName } = useUserContext();
  const { room } = useRoomContext();
  const { roomId } = useParams();

  useEffect(() => {
    if (room) {
      const { title } = room.task;

      if (title) setTask(title);
    }
  }, [room]);

  useSocket('TASK_UPDATED', ({ title }) => setTask(title));

  const name = getUserName(roomId);

  return <InfoBox title={task} value={name} align="left" />;
};

export default UserBox;
