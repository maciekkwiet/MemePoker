import * as socketio from 'socket.io';
import { Rooms } from 'models/Rooms';

interface UserVotePayload {
  name: string;
  value: number;
  roomId: number;
}

const onUserVote = (io: socketio.Server, rooms: Rooms, socket: socketio.Socket) => async ({
  name,
  value,
  roomId,
}: UserVotePayload) => {
  rooms.vote(name, value, roomId);
  const message = `${name} has voted ${value} in the room: ${roomId.toString()}`;
  io.to(roomId.toString()).emit('FEED', message);
};

export { onUserVote };
