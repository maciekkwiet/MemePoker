import { EventHandlerWrapper } from 'typings';
import { client } from '@services/logger';

const eventHandlerWrapper: EventHandlerWrapper = (ctx, handler) => (payload, callback) => {
  try {
    handler(ctx, payload, callback);
  } catch (ex) {
    ctx.io.to(ctx.socket.id).emit('EXCEPTION', ex);
    client.log(ex);
  }
};
export { eventHandlerWrapper };
