import { User } from '@models/User';
import { rooms } from '@models/Rooms';
import { EventHandler, UserJoinPayload } from '@typings*';

const onUserJoin: EventHandler<UserJoinPayload> = ({ io, socket }, { name, roomId, isAdmin }, callback) => {
  const user = new User(name, socket.id, isAdmin);
  const room = rooms.getRoom(roomId);
  const message = `${name} has joined the room: ${roomId}`;
  room.addUser(user);

  socket.join(roomId);
  console.log(callback);
  if (callback) callback(room);

  io.to(roomId).emit('USER_JOINED', room.getUsers());
  io.to(roomId).emit('FEED', message);
};

export { onUserJoin };
