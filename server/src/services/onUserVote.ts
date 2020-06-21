import * as socketio from 'socket.io';
import { rooms } from 'models/Rooms';

interface UserVotePayload {
  name: string;
  value: number;
  roomId: number;
}

const onUserVote = (io: socketio.Server, socket: socketio.Socket) => ({ name, value, roomId }: UserVotePayload) => {
  const room = rooms.getRoom(roomId);
  const user = room.getUser(name);

  if (!user) return console.log(`User ${name} does not belong to room ${room.id}`);

  user.vote = value;

  let message: string;

  if (room.doesEveryoneVoted()) {
    message = `Everyone in room ${room.id} voted, votes: ${JSON.stringify(room.getVotes())}`;

    io.to(roomId.toString()).emit('CARDS_REVEALED', room.getVotes());
  } else {
    message = `${name} has voted in the room: ${roomId}`;

    io.to(roomId.toString()).emit('USER_VOTED', user);
  }

  io.to(roomId.toString()).emit('FEED', message);
};

export { onUserVote };
