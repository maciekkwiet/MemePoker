import { rooms } from '@models/Rooms';
import { Middlewere } from '@typings';

export const auth: Middlewere = ([eventName, payload], next) => {
  try {
    if (eventName === 'USER_JOIN') return next(); // if user is just joining don't use this middlewere

    const { name, roomId } = payload;
    const room = rooms.getRoom(roomId);
    const user = room.getUser(name);

    payload.room = room;
    payload.user = user;

    return next();
  } catch (ex) {
    console.log('Authentication middlewere error:');
    console.error(ex);
  }
};
