import { EventHandler, AuthPayload } from '@typings*';

const onShowVotes: EventHandler<AuthPayload> = ({ io }, { room }) => {
  const message = `Votes: ${JSON.stringify(room.getVotes())} in room ${room.id}`;

  io.to(room.id).emit('ROOM_VOTES', room.getVotes());
  io.to(room.id).emit('FEED', message);
};

export { onShowVotes };
