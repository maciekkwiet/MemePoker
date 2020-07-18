import React, { useState, useEffect } from 'react';

import { useRoomContext } from 'Contexts/RoomContext';
import { useSocket } from 'socketio-hooks';
import InfoBox from 'Components/InfoBox';

const UserBox = () => {
  const [task, setTask] = useState('Waiting for first task...');
  const { room } = useRoomContext();

  useEffect(() => {
    if (room) {
      const { title } = room.task;

      if (title) setTask(title);
    }
  }, [room]);

  useSocket('TASK_UPDATED', ({ title }) => setTask(title));

  return <InfoBox title={task} align="left" />;
};

export default UserBox;
