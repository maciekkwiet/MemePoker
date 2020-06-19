import * as socketio from 'socket.io';
import { User } from '../models/User';
import { Rooms } from 'models/Rooms';

interface UserJoinPayload {
  name: string;
  roomId: number;
  isAdmin: boolean;
}

const onUserJoin = (io: socketio.Server, rooms: Rooms, socket: socketio.Socket) => async ({
  name,
  roomId,
  isAdmin,
}: UserJoinPayload) => {
  const newUser = new User(name, null, isAdmin);
  let messageStatus: Boolean = rooms.doesRoomExist(roomId, newUser);
  let message: string = messageStatus
    ? `${name} has joined the room: ${roomId.toString()}`
    : `User ${name} is already in room: ${roomId.toString()}`;
  socket.join(roomId.toString());
  io.to(roomId.toString()).emit('FEED', message);
};

export { onUserJoin };
