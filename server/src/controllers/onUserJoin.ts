import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

interface UserJoinPayload {
  name: string;
  roomId: string;
  isAdmin: boolean;
}

const onUserJoin = (io: socketio.Server, socket: socketio.Socket) => ({ name, roomId, isAdmin }: UserJoinPayload) => {
  try {
    const room = rooms.getRoom(roomId);
    const user = room.addUser(name, socket.id, isAdmin);
    const message = `${user.name} has joined the room: ${roomId}`;

    socket.join(roomId.toString());

    io.to(roomId).emit('USER_JOIN', room.getUsers());
    io.to(roomId).emit('FEED', message);
  } catch (ex) {
    console.error(ex);
  }
};

export { onUserJoin };
