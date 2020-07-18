import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

const onShowVotes = (io: socketio.Server, socket: socketio.Socket) => (roomId: string) => {
  try {
    const room = rooms.getRoom(roomId);
    const message = `Votes: ${JSON.stringify(room.getVotes())} in room ${room.id}`;
    room.getTask().analyzeResults();
    io.to(roomId).emit('ROOM_VOTES', room.getTask());
    io.to(roomId).emit('FEED', message);
  } catch (ex) {
    console.error(ex);
  }
};

export { onShowVotes };
