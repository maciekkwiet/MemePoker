import * as socketio from 'socket.io';
import { rooms } from '@models/Rooms';
import { EventHandler, NewTaskPayload } from '@typings*';

const onNewTask: EventHandler<NewTaskPayload> = ({ io, socket }, { task, room }) => {
  room.getAdmin(socket.id);

  room.setTask(task);

  room.clearVotes();

  const message = `New task: ${task} in the room: ${room.id}`;

  io.to(room.id).emit('FEED', message);
  io.to(room.id).emit('TASK_UPDATED', room.getTask());
  io.to(room.id).emit('CLEAR_VOTES', room.getUsers());
};

export { onNewTask };
