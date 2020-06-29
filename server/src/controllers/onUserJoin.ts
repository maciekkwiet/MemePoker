import * as socketio from 'socket.io';

import { User } from '@models/User';
import { rooms } from '@models/Rooms';

interface UserJoinPayload {
  name: string;
  roomId: number;
  isAdmin: boolean;
}

const onUserJoin = (io: socketio.Server, socket: socketio.Socket) => ({ name, roomId, isAdmin }: UserJoinPayload) => {
  const user = new User(name, isAdmin);
  const room = rooms.getRoom(roomId);

  if (typeof room === 'string') return console.error(room);

  const message = `${name} has joined the room: ${roomId}`;
  room.addUser(user);

  socket.join(roomId.toString());

  io.to(roomId.toString()).emit('USER_JOINED', room.getUsers());
  io.to(roomId.toString()).emit('FEED', message);
};

export { onUserJoin };
