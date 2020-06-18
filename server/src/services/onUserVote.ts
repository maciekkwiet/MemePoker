import * as socketio from 'socket.io';

interface UserVotePayload {
  name: string;
  value: number;
  roomId: string;
}

const onUserVote = (io: socketio.Server, socket: socketio.Socket) => ({ name, value, roomId }: UserVotePayload) => {
  const message = `${name} has voted ${value} in the room: ${roomId}`;

  console.log(message);
  io.to(roomId).emit('FEED', message);
};

export { onUserVote };
