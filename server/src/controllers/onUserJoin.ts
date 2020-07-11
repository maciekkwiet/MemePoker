import * as socketio from 'socket.io';

import { User } from '@models/User';
import { rooms } from '@models/Rooms';

interface UserJoinPayload {
  name: string;
  roomId: string;
  isAdmin: boolean;
}

const onUserJoin = (io: socketio.Server, socket: socketio.Socket) => ({ name, roomId, isAdmin }: UserJoinPayload) => {
  try {
    const user = new User(name, socket.id, isAdmin);
    const room = rooms.getRoom(roomId);
    const message = `${name} has joined the room: ${roomId}`;
    room.addUser(user);

    socket.join(roomId.toString());

    io.to(roomId).emit('USER_JOINED', room.getUsers());
    io.to(roomId).emit('FEED', message);
  } catch (ex) {
    console.error(ex);
  }
};

export { onUserJoin };
