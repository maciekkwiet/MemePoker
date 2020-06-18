import * as socketio from 'socket.io';
import { Room } from '../models/Room';
import User from '../models/User';

interface UserJoinPayload {
  name: string;
  roomId: number;
  isAdmin: boolean;
}

const rooms: Array<Room> = [];
let activeRooms: Array<number> = [];

const onUserJoin = (io: socketio.Server, socket: socketio.Socket) => async ({
  name,
  roomId,
  isAdmin,
}: UserJoinPayload) => {
  const newUser = new User(name, null, isAdmin);
  console.log(newUser);
  if (isRoomCreated(roomId)) {
    rooms.map((room: Room) => {
      if (room.roomId == roomId) {
        //
        room.users.push(newUser);
      }
    });
  } else {
    activeRooms.push(roomId);
    const newRoom = new Room(roomId, null);
    newRoom.users.push(newUser);
    rooms.push(newRoom);
  }
  console.log(rooms);
  const message: string = `${name} has joined the room: ${roomId.toString()}`;
  console.log(message);
  socket.join(roomId.toString());
  io.to(roomId.toString()).emit('FEED', message);
};

function isRoomCreated(roomId: number): boolean {
  let checkedId: Array<number> = [];
  const param = activeRooms.map((id: number) => {
    if (id == roomId) checkedId.push(id);
  });
  if (checkedId.length > 0) return true;
  else return false;
}

export { onUserJoin };

// STARY KOD Z DODANIEM DO BAZY MONGODB

// const createUser = async (data: UserJoinPayload) => {
//   try {
//     const user = new User(data);
//     await user.save();
//     console.log(user);
//   } catch (e) {
//     console.log(e);
//   }
// };

// let userInDB = await User.findOne({ name: name, room: roomId });
// if (userInDB) {
//   const message: string = `${name} is already created`;
//   console.log(message);
//   io.to(roomId).emit('FEED', message);
// } else {
//   createUser({
//     name: name,
//     roomId: roomId,
//   });
//   const message: string = `${name} has joined the room: ${roomId}`;
//   console.log(message);
//   socket.join(roomId);
//   io.to(roomId).emit('FEED', message);
// }
