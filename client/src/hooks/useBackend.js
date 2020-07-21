import { useEmit } from 'socketio-hooks';
import { useUserContext } from 'Contexts/UserContext';

/**
 * Used to talk with backend, applies token to each request emitted
 * @param {string} eventName
 * @returns {function} function to any request with token attache
 */
const useBackend = eventName => {
  const emitter = useEmit(eventName);
  const { token } = useUserContext();

  return (payload = {}, callback) => {
    payload.token = token;
    emitter(payload, callback);
  };
};
export { useBackend };
