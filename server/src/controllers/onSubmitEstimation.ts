import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

// interface UserVotePayload {
//   name: string;
//   value: number;
//   roomId: number;
// }

const onSubmitEstimation = (io: socketio.Server, socket: socketio.Socket) => (roomId: number) => {
  const room = rooms.getRoom(roomId);
  if (typeof room === 'string') return console.error(room);
  //const user = room.getUser(name);

  //if (!user) return console.log(`User ${name} does not belong to room ${room.id}`);

  //user.vote = value;

  let message: string;

  io.to(roomId.toString()).emit('USER_VOTED', user);

  io.to(roomId.toString()).emit('FEED', message);
};
export { onSubmitEstimation };
