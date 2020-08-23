import { EventHandler, UserVotePayload } from '@typings';

const onUserVote: EventHandler<UserVotePayload> = ({ io }, { value, room, user }) => {
  let message: string;

  if (room.getUser(user.name).isObserver) return;

  user.vote = value;
  // user.hasVoted = true;

  const userInfo = { name: user.name, hasVoted: user.hasVoted };

  if (room.hasEveryoneVoted()) {
    room.getTask().setResults(room.getVotes());
    room.getTask().analyzeResults();
    message = `Everyone in room ${room.id} voted, votes: ${JSON.stringify(room.getVotes())}`;

    io.to(room.id).emit('ROOM_VOTES', { task: room.getTask(), votes: room.getVotes() });
  } else {
    message = `${user.name} has voted in the room: ${room.id}`;

    io.to(room.id).emit('USER_VOTED', userInfo);
  }

  io.to(room.id).emit('FEED', message);
};

export { onUserVote };
