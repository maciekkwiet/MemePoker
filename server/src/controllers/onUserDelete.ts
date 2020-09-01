import * as jwt from 'jsonwebtoken';

import { rooms } from '@models/Rooms';
import { EventHandler, AuthPayload } from '@typings*';

const onUserDelete: EventHandler<AuthPayload> = ({ io, socket }, { room, user }) => {
  const message = `${user.name} has left the room: ${room.id}`;
  room.deleteUser(user.name);

  io.to(room.id).emit('FEED', message);
  io.to(room.id).emit('USER_DELETED', room.getUsers());
};

export { onUserDelete };
