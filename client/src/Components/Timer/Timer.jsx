import React from 'react';
import InfoBox from 'Components/InfoBox';
import { useRoomContext } from 'Contexts/RoomContext';

const Timer = () => {
  const { seconds } = useRoomContext();
  const padZeroFromLeft = (time, length) => {
    return (new Array(length + 1).join('0') + time).slice(-length);
  };
  const timeFormater = time => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return padZeroFromLeft(minutes, 2) + ':' + padZeroFromLeft(seconds, 2);
  };

  return <InfoBox title="TIMER" value={timeFormater(seconds)} padding={0.25} />;
};

export default Timer;
