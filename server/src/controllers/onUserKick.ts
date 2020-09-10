import { EventHandler, UserKickPayload } from '@typings*';

const onUserKick: EventHandler<UserKickPayload> = ({ io }, { name, room }) => {
  const message = `${name} has been kicked from the room: ${room.id}`;
  room.deleteUser(name, false);

  io.to(room.id).emit('FEED', message);
  io.to(room.id).emit('USER_DELETED', room.getUsers());
};

export { onUserKick };
