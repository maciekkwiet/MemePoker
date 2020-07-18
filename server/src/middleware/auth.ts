import * as jwt from 'jsonwebtoken';

import { rooms } from '@models/Rooms';
import { Middlewere } from '@typings';

export const auth: Middlewere = ([eventName, payload], next) => {
  try {
    if (eventName === 'USER_JOIN') return next(); // if user is just joining don't use this middlewere
    const { token } = payload;

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET ?? '');

    const room = rooms.getRoom(decoded?.roomId);
    const user = room.getUser(decoded?.user.name);

    payload.room = room;
    payload.user = user;

    return next();
  } catch (ex) {
    console.log('Authentication middlewere error:');
    console.error(ex);
  }
};
