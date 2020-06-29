import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

const onShowVotes = (io: socketio.Server, socket: socketio.Socket) => (roomId: number) => {
  const room = rooms.getRoom(roomId);
  if (typeof room === 'string') return console.error(room);

  const message = `Votes: ${JSON.stringify(room.getVotes())}`;

  io.to(roomId.toString()).emit('ROOM_VOTES', room.getVotes());

  io.to(roomId.toString()).emit('FEED', message);
};

export { onShowVotes };
