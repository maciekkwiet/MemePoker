import { EventHandler, NewTaskPayload } from '@typings*';

const onNewTask: EventHandler<NewTaskPayload> = ({ io }, { user, room, task }) => {
  if (!user.isAdmin) throw new Error(`User ${user.name} is not authorized to add new task in room ${room}`);

  room.setTask(task);

  room.clearVotes();

  const message = `New task: ${task} in the room: ${room.id}`;

  io.to(room.id).emit('FEED', message);
  io.to(room.id).emit('TASK_UPDATED', room.getTask());
  io.to(room.id).emit('CLEAR_VOTES', room.getUsers());
};

export { onNewTask };
