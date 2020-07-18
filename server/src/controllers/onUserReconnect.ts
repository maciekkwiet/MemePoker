import { EventHandler, AuthPayload } from '@typings*';

const onUserReconnect: EventHandler<AuthPayload> = ({ io, socket }, { user, room }, responseCallback) => {
  const message = `${user.name} has reconnected to the room: ${room.id}`;

  socket.join(room.id);

  if (responseCallback) responseCallback(room);

  io.to(room.id).emit('FEED', message);
};

export { onUserReconnect };
