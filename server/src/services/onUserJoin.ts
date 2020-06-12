import * as socketio from 'socket.io';

interface UserJoinPayload {
  name: string;
  roomId: string;
}

const onUserJoin = (io: socketio.Server, socket: socketio.Socket) => ({ name, roomId }: UserJoinPayload) => {
  const message = `${name} has joined the room: ${roomId}`;
  socket.join(roomId);
  console.log(message);
  io.to(roomId).emit('FEED', message);
};

export { onUserJoin };
