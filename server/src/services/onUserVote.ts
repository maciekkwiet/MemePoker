import * as socketio from 'socket.io';
import { rooms } from 'models/Rooms';

interface UserVotePayload {
  name: string;
  value: number;
  roomId: number;
}

const onUserVote = (io: socketio.Server, socket: socketio.Socket) => ({ name, value, roomId }: UserVotePayload) => {
  const room = rooms.getRoom(roomId);
  const user = room.getUser(name);

  if (!user) return console.log(`User ${name} does not belong to room ${room.id}`);

  user.vote = value;

  const message = `${name} has voted in the room: ${roomId.toString()}`;
  io.to(roomId.toString()).emit('FEED', message);
};

export { onUserVote };
