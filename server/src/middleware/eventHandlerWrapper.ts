import { EventHandlerWrapper } from 'typings';
import { log } from '@services/logger';
import { rooms } from '@models/Rooms';

const eventHandlerWrapper: EventHandlerWrapper = (ctx, handler) => (payload: any, callback) => {
  try {
    handler(ctx, payload, callback);
    const room = rooms.getRoom(payload.roomId);
    room.inactiveTime = new Date().getTime();
  } catch (ex) {
    ctx.io.to(ctx.socket.id).emit('EXCEPTION', ex);
    log.error(ex);
  }
};
export { eventHandlerWrapper };
