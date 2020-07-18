import { EventHandler, AuthPayload } from '@typings*';

const onUserReconnect: EventHandler<AuthPayload> = ({ io, socket }, { user, room }, callback) => {
  const message = `${user} has joined the room: ${room.id}`;
  console.log('onUserReconnect', socket.id);
  socket.join(room.id);
  if (callback) callback(room);

  io.to(room.id).emit('FEED', message);
};

export { onUserReconnect };
