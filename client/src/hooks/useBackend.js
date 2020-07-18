import { useEmit } from 'socketio-hooks';
import { useUserContext } from 'Contexts/UserContext';

/**
 *
 * @param {string} eventName
 * @returns {function}
 */
const useBackend = eventName => {
  const emitter = useEmit(eventName);
  const { token } = useUserContext();

  return (payload, callback) => {
    payload.token = token;
    emitter(payload, callback);
  };
};

export { useBackend };
