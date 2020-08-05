import React, { useState } from 'react';
import { useSocket } from 'socketio-hooks';

import InfoBox from 'Components/InfoBox';
import useInterval from 'Utils/Converters/useInterval';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const padZeroFromLeft = (time, length) => {
    return (new Array(length + 1).join('0') + time).slice(-length);
  };
  const timeFormater = time => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return padZeroFromLeft(minutes, 2) + ':' + padZeroFromLeft(seconds, 2);
  };

  useInterval(() => {
    if (isActive) setSeconds(seconds + 1);
  }, 1000);

  useSocket('TASK_UPDATED', () => {
    reset();
    setIsActive(true);
  });

  useSocket('ESTIMATION_SUBMITTED', () => {
    setIsActive(false);
  });

  return <InfoBox title="TIMER" value={timeFormater(seconds)} padding={0.25} />;
};

export default Timer;
