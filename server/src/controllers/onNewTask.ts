import * as socketio from 'socket.io';
import { rooms } from 'models/Rooms';

interface NewTask {
  task: string;
  roomId: number;
}

const onNewTask = (io: socketio.Server, socket: socketio.Socket) => ({ roomId, task }: NewTask) => {
  const room = rooms.getRoom(roomId);
  room.task = task;

  const message = task;

  socket.join(roomId.toString());

  io.to(roomId.toString()).emit('FEED', message);
};

export { onNewTask };
