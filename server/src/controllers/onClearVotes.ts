import { EventHandler, AuthPayload } from '@typings*';

const onClearVotes: EventHandler<AuthPayload> = ({ io }, { room }) => {
  room.clearVotes();

  const message = `All votes in room ${room.id} have been reset`;

  io.to(room.id).emit('FEED', message);

  io.to(room.id).emit('VOTES_CLEARED', room.getUsers());
};

export { onClearVotes };
