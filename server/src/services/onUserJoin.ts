import * as socketio from 'socket.io';
import { User } from 'models/User';
import { rooms } from 'models/Rooms';

interface UserJoinPayload {
  name: string;
  roomId: number;
  isAdmin: boolean;
}

const onUserJoin = (io: socketio.Server, socket: socketio.Socket) => ({ name, roomId, isAdmin }: UserJoinPayload) => {
  const room = rooms.getRoom(roomId);
  const user = new User(name, isAdmin);

  room.addUser(user);

  const message = `${name} has joined the room: ${roomId}`;

  socket.join(roomId.toString());
  io.to(roomId.toString()).emit('FEED', message);
};

export { onUserJoin };
