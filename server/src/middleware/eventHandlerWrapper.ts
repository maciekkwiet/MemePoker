import { EventHandlerWrapper } from 'typings';

const eventHandlerWrapper: EventHandlerWrapper = (ctx, handler) => (payload, callback) => {
  try {
    handler(ctx, payload, callback);
  } catch (ex) {
    ctx.io.to(ctx.socket.id).emit('EXCEPTION', ex);
    // logger
  }
};
export { eventHandlerWrapper };
