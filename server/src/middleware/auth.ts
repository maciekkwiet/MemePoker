import * as jwt from 'jsonwebtoken';

import { rooms } from '@models/Rooms';
import { Middlewere, TokenPayload } from '@typings';

export const auth: Middlewere = ([eventName, payload], next) => {
  try {
    if (eventName === 'USER_JOIN') return next(); // if user is just joining don't use this middlewere
    const { token } = payload;

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET ?? '') as TokenPayload;

    const room = rooms.getRoom(decodedToken.roomId);
    const user = room.getUser(decodedToken.user.name);

    payload.room = room;
    payload.user = user;

    return next();
  } catch (ex) {
    console.log('Authentication middlewere error:');
    console.error(ex);
  }
};
