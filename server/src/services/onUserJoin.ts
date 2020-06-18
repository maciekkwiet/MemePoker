import * as socketio from 'socket.io';
import Room from '../models/Room';
import User from '../models/User';
//const { User } = require('../models/user');

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
  // sprawdzenie czy taki room juz istnieje jak nie to dopiero wtedy tworzymy nowy pokoj a jak istnieje to tworzymy tylko usera
  // w activeRooms siedza aktualnie uzyte pokoje(trzeba je zrobic unikalne(obiekt Set?)) i trzeba to porównać z wartościa roomID,
  const newUser = new User(name, null, isAdmin);
  console.log(User);
  if (isRoomCreated(roomId)) {
    rooms.map((room: Room) => {
      room.users.push(newUser);
    });
  } else {
    rooms.map((room: Room) => {
      activeRooms.push(room.roomId);
    });
    const newRoom = new Room(roomId, [newUser]);
    rooms.push(newRoom);
  }
  const message: string = `${name} has joined the room: ${roomId.toString()}`;
  console.log(message);
  socket.join(roomId.toString());
  io.to(roomId.toString()).emit('FEED', message);
  console.log(activeRooms, rooms[0].users);
};

function isRoomCreated(roomId: number) {
  let checkedId = [];
  checkedId = activeRooms.filter((id: number) => {
    id = roomId;
  });
  //console.log(checkedId);
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
