import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

const onSubmitEstimation = (io: socketio.Server, socket: socketio.Socket) => (roomId: string) => {
  try {
    const room = rooms.getRoom(roomId);

    room.archiveTask();
    room.clearVotes();

    const message: string = 'The task was saved in history';

    io.to(roomId).emit('FEED', message);
  } catch (ex) {
    console.error(ex);
  }
};
export { onSubmitEstimation };
