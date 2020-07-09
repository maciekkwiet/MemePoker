import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

const onVoteAnalysis = (io: socketio.Server, socket: socketio.Socket) => (roomId: string) => {
  try {
    const room = rooms.getRoom(roomId);

    room.getAdmin(socket.id);
    const analysis = room.getTask().getAnalysis();

    io.to(roomId).emit('VOTE_ANALYZED', analysis);
  } catch (ex) {
    console.error(ex);
  }
};

export { onVoteAnalysis };
