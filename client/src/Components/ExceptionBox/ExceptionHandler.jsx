import React, { useState } from 'react';
import { useSocket } from 'socketio-hooks';

import ExceptionBox from 'Components/ExceptionBox/ExceptionBox';

const ExceptionHandler = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  useSocket('EXCEPTION', message => {
    setErrorMessage(null);
    setErrorMessage(message);
  });

  return <div>{errorMessage && <ExceptionBox content={errorMessage} isOpen={errorMessage} />}</div>;
};

export default ExceptionHandler;
