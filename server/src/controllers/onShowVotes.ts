import { EventHandler, AuthPayload } from '@typings*';

const onShowVotes: EventHandler<AuthPayload> = ({ io }, { room }) => {
  const message = `Votes: ${JSON.stringify(room.getVotes())} in room ${room.id}`;

  room.getTask().setResults(room.getVotes());
  room.getTask().analyzeResults();

  io.to(room.id).emit('ROOM_VOTES', { task: room.getTask(), votes: room.getVotes() });
  io.to(room.id).emit('MEME', room.getVotes());
  io.to(room.id).emit('FEED', message);
};

export { onShowVotes };
