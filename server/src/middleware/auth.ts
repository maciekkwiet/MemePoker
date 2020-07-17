import { rooms } from '@models/Rooms';
import { Middlewere } from '@typings';

export const auth: Middlewere = ([, payload], next) => {
  try {
    const { name, roomId } = payload;
    const room = rooms.getRoom(roomId);
    const user = room.getUser(name);

    payload.room = room;
    payload.user = user;

    next();
  } catch (ex) {
    console.log('Authentication middlewere error:');
    console.error(ex);
  }
};
