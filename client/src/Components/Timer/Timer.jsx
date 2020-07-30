import React, { useState, useEffect } from 'react';
import { useSocket } from 'socketio-hooks';

import InfoBox from 'Components/InfoBox';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
  };

  const pad = (number, size) => {
    var s = String(number);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (minutes === 59 && seconds === 59) {
          setSeconds(0);
          setMinutes(0);
        } else if (seconds === 59) {
          setSeconds(0);
          setMinutes(minutes => minutes + 1);
        } else setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  useSocket('TASK_UPDATED', () => {
    reset();
    setIsActive(true);
  });

  useSocket('ESTIMATION_SUBMITTED', () => {
    setIsActive(false);
  });

  return <InfoBox title="TIMER" value={pad(minutes, 2) + ':' + pad(seconds, 2)} padding={0.25} />;
};

export default Timer;
