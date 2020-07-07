import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

const onClearVotes = (io: socketio.Server, socket: socketio.Socket) => (roomId: string) => {
  try {
    const room = rooms.getRoom(roomId);

    if (typeof room === 'string') return console.error(room);

    room.clearVotes();

    const message = `All votes in room ${room.id} have been reset`;

    io.to(roomId).emit('FEED', message);

    io.to(roomId).emit('CLEARED_VOTES', room.getVotes());
  } catch (ex) {
    console.error(ex);
  }
};

export { onClearVotes };
