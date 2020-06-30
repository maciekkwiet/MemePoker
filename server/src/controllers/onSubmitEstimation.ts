import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

const onSubmitEstimation = (io: socketio.Server, socket: socketio.Socket) => (roomId: number) => {
  const room = rooms.getRoom(roomId);
  if (typeof room === 'string') return console.error(room);

  // dodanie rooma do historii

  room.clearVotes();
  room.task = '';

  const message: string = 'The task was saved in history';

  io.to(roomId.toString()).emit('FEED', message);
};
export { onSubmitEstimation };
