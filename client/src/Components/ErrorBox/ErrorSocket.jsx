import React, { useState } from 'react';
import { useSocket } from 'socketio-hooks';

import ErrorProp from 'Components/ErrorBox/ErrorProp';

const ErrorSocket = () => {
  const [error, setError] = useState(null);

  useSocket('EXCEPTION', message => {
    setError(null);
    setError(message);
  });

  return <div>{error && <ErrorProp content={error} isOpen={error} />}</div>;
};

export default ErrorSocket;
