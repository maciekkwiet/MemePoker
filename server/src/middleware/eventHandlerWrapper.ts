import { EventHandlerWrapper } from 'typings';
import { log } from '../services/logger';

const eventHandlerWrapper: EventHandlerWrapper = (ctx, handler) => (payload, callback) => {
  try {
    handler(ctx, payload, callback);
  } catch (ex) {
    ctx.io.to(ctx.socket.id).emit('EXCEPTION', ex);
    log.error(ex);
  }
};
export { eventHandlerWrapper };
