import { EventHandler, AuthPayload } from '@typings*';

const onUserLeave: EventHandler<AuthPayload> = ({ io, socket }, { room, user }) => {
  const message = `${user.name} has left the room: ${room.id}`;
  room.deleteUser(user.name, user.isObserver);

  io.to(room.id).emit('FEED', message);
  io.to(room.id).emit('USER_DELETED', room.getUsers());
};

export { onUserLeave };
