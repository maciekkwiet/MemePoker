import * as socketio from 'socket.io';

interface UserJoinPayload {
  name: string;
  roomId: string;
  isAdmin: boolean;
}

const onUserJoin = (io: socketio.Server, socket: socketio.Socket) => ({ name, roomId, isAdmin }: UserJoinPayload) => {
  const message = `${name} has joined the room: ${roomId}`;
  console.log('isAdmin ', isAdmin);
  console.log(message);

  socket.join(roomId);
  io.to(roomId).emit('FEED', message);
};

export { onUserJoin };
