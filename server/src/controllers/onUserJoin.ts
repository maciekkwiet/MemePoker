import * as jwt from 'jsonwebtoken';

import { User } from '@models/User';
import { rooms } from '@models/Rooms';
import { EventHandler, UserJoinPayload } from '@typings*';

const onUserJoin: EventHandler<UserJoinPayload> = ({ io, socket }, { name, roomId, isAdmin }, callback) => {
  const room = rooms.getRoom(roomId);
  const message = `${name} has joined the room: ${roomId}`;
  const user = room.addUser(name, socket.id, isAdmin);

  const token = jwt.sign({ user, roomId }, process.env.JWT_SECRET ?? '');

  socket.join(roomId);
  if (callback) callback({ room, token });

  io.to(roomId).emit('USER_JOINED', room.getUsers());
  io.to(roomId).emit('FEED', message);
};

export { onUserJoin };
