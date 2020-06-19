import * as socketio from 'socket.io';
import { Room } from '../models/Room';
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
  if (rooms.doesRoomExist(roomId)) {
    rooms.rooms.map((room: Room) => {
      if (room.roomId == roomId && !room.doesUserExist(newUser)) {
        room.users.push(newUser);
      } else console.log('This user is already in room');
    });
  } else {
    const newRoom = new Room(roomId, null);
    newRoom.users.push(newUser);
    rooms.rooms.push(newRoom);
  }
  const message: string = `${name} has joined the room: ${roomId.toString()}`;
  console.log(message);
  socket.join(roomId.toString());
  io.to(roomId.toString()).emit('FEED', message);
  console.log(rooms.rooms);
};

export { onUserJoin };
