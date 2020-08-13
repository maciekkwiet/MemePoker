import { EventHandler, UserVotePayload } from '@typings';

const onUserVote: EventHandler<UserVotePayload> = ({ io }, { value, room, user }) => {
  let message: string;

  if (room.getUser(user.name).isObserver) return;

  user.vote = value;

  if (room.hasEveryoneVoted()) {
    room.getTask().setResults(room.getVotes());
    room.getTask().analyzeResults();
    message = `Everyone in room ${room.id} voted, votes: ${JSON.stringify(room.getVotes())}`;
    if (room.areVotesEqual()) {
      setTimeout(() => {
        io.to(room.id).emit('MEME', room.getVotes());
      }, 500);
    }
    io.to(room.id).emit('ROOM_VOTES', { task: room.getTask(), votes: room.getVotes(), isEqual: room.areVotesEqual() });
  } else {
    message = `${user.name} has voted in the room: ${room.id}`;

    io.to(room.id).emit('USER_VOTED', user);
  }

  io.to(room.id).emit('FEED', message);
};

export { onUserVote };
