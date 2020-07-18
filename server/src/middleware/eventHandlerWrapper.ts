import { EventHandlerWrapper } from 'typings';

const eventHandlerWrapper: EventHandlerWrapper = (ctx, handler) => (payload, callback) => {
  console.log('eventHandlerWrapper -> callback', callback);
  try {
    handler(ctx, payload, callback);
  } catch (ex) {
    console.log('Error w  chuj: ', ex);
  }
};
export { eventHandlerWrapper };
