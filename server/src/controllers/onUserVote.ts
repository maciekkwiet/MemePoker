import { EventHandler, UserVotePayload } from '@typings';

const onUserVote: EventHandler<UserVotePayload> = ({ io }, { value, room, user }) => {
  let message: string;

  console.log({ value, room, user });

  user.vote = value;

  if (room.hasEveryoneVoted()) {
    room.archiveTask();

    message = `Everyone in room ${room.id} voted, votes: ${JSON.stringify(room.getVotes())}`;

    io.to(room.id).emit('CARDS_REVEALED', room.getVotes());
  } else {
    message = `${user.name} has voted in the room: ${room.id}`;

    io.to(room.id).emit('USER_VOTED', user);
  }

  io.to(room.id).emit('FEED', message);
};

export { onUserVote };
