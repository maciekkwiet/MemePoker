import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

interface EstimationResult {
  result: string;
  roomId: string;
}

const onSubmitEstimation = (io: socketio.Server, socket: socketio.Socket) => ({ roomId, result }: EstimationResult) => {
  try {
    const room = rooms.getRoom(roomId);

    room.getAdmin(socket.id);
    room.getTask().reassignFinalResult(Number(result));

    room.archiveTask();
    room.clearVotes();

    const message: string = 'The task was saved in history';

    io.to(roomId).emit('FEED', message);
    io.to(roomId).emit('ESTIMATION_SUBMITTED', room.getTask());
  } catch (ex) {
    console.error(ex);
  }
};
export { onSubmitEstimation };
