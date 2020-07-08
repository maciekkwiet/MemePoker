import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

interface ReassignedResult {
  result: string;
  roomId: string;
}

const onReassignedResult = (io: socketio.Server, socket: socketio.Socket) => ({ roomId, result }: ReassignedResult) => {
  try {
    const room = rooms.getRoom(roomId);

    room.getAdmin(socket.id);
    room.getTask().reassignFinalResult(Number(result));

    const message = `New final result: ${result} in the room: ${roomId}`;

    io.to(roomId).emit('FEED', message);
    io.to(roomId).emit('RESULT_REASSIGNED', room.getTask());
  } catch (ex) {
    console.error(ex);
  }
};

export { onReassignedResult };
