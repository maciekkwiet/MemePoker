
import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';

interface NewTask {
  task: string;
  roomId: string;
}

const onNewTask = (io: socketio.Server, socket: socketio.Socket) => ({ roomId, task }: NewTask) => {
  try {
    const room = rooms.getRoom(roomId);

    room.getAdmin(socket.id);

    room.setTask(task);

    room.clearVotes();

    const message = `New task: ${task} in the room: ${roomId}`;

    io.to(roomId).emit('FEED', message);
    io.to(roomId).emit('TASK_UPDATED', room.getTask());
    io.to(roomId).emit('CLEAR_VOTES', room.getUsers());
  } catch (ex) {
    console.error(ex);
  }
};

export { onNewTask };
