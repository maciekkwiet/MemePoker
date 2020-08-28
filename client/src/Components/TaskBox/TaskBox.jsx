import React from 'react';
import { useRoomContext } from 'Contexts/RoomContext';
import InfoBox from 'Components/InfoBox';

const TaskBox = () => {
  const { title } = useRoomContext().room.task;
  return <InfoBox title={title} align="left" />;
};

export default TaskBox;
