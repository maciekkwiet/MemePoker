import { EventHandlerWrapper } from 'typings';
import { log } from '../logger/opts';

const eventHandlerWrapper: EventHandlerWrapper = (ctx, handler) => (payload, callback) => {
  try {
    handler(ctx, payload, callback);
  } catch (ex) {
    ctx.io.to(ctx.socket.id).emit('EXCEPTION', ex);
    log.info(ex);
    console.log('error');
  }
};
export { eventHandlerWrapper };
