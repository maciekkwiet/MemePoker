import { EventHandlerWrapper } from 'typings';
import * as morgan from 'morgan';

const eventHandlerWrapper: EventHandlerWrapper = (ctx, handler) => (payload, callback) => {
  try {
    handler(ctx, payload, callback);
  } catch (ex) {
    console.log('Error w  chuj: ', ex);
  }
};
export { eventHandlerWrapper };
