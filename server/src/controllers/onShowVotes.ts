import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

const onShowVotes = (io: socketio.Server, socket: socketio.Socket) => (roomId: number) => {
  try {
    const room = rooms.getRoom(roomId);

    const message = `Votes: ${JSON.stringify(room.getVotes())} in room ${room.id}`;

    io.to(roomId.toString()).emit('ROOM_VOTES', room.getVotes());

    io.to(roomId.toString()).emit('FEED', message);
  } catch (ex) {
    console.error(ex);
  }
};

export { onShowVotes };
