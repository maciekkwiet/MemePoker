import * as jwt from 'jsonwebtoken';

import { rooms } from '@models/Rooms';
import { Middlewere, TokenPayload } from '@typings';
import { log } from '../logger/opts';

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
    // trzeba ta linijke wykonać, ale zeby ja wykonac trzeba jakos dojść do io
    // io.to(socket.id).emit('EXCEPTION', 'AUTHORIZATION ERROR' + ex);
    log.info(ex);
  }
};
