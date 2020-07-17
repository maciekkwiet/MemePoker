import { Context } from 'typings';

const eventHandlerWrapper = (ctx: Context, handler: (ctx: Context, payload: unknown) => void) => (payload: unknown) => {
  try {
    handler(ctx, payload);
  } catch (ex) {
    console.log('Error w  chuj: ', ex);
  }
};
export { eventHandlerWrapper };
