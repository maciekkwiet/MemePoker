import { useEmit } from 'socketio-hooks';
import { useUserContext } from 'Contexts/UserContext';

/**
 * Used to talk with backend, applies token to each request emitted
 * @param {string} eventName
 * @returns {function}
 */
const useBackend = eventName => {
  const emitter = useEmit(eventName);
  const { token } = useUserContext();

  return (payload, callback) => {
    const request = payload ?? {};
    request.token = token;
    emitter(request, callback);
  };
};

export { useBackend };
