import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

interface UserVotePayload {
  name: string;
  value: number;
  roomId: string;
}

const onUserVote = (io: socketio.Server, socket: socketio.Socket) => ({ name, value, roomId }: UserVotePayload) => {
  try {
    const room = rooms.getRoom(roomId);
    const user = room.getUser(name);

    user.vote = value;
    let message: string;

    if (room.hasEveryoneVoted()) {
      room.getTask().setResults(room.getVotes());
      room.getTask().analyzeResults();
      message = `Everyone in room ${room.id} voted, votes: ${JSON.stringify(room.getVotes())}`;
      io.to(roomId).emit('CARDS_REVEALED', room.getTask());
    } else {
      message = `${name} has voted in the room: ${roomId}`;
      io.to(roomId).emit('USER_VOTED', user);
    }

    io.to(roomId).emit('FEED', message);
  } catch (ex) {
    console.error(ex);
  }
};
export { onUserVote };
