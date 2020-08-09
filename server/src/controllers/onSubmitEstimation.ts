import { EstimationResult, EventHandler } from '@typings*';

const onSubmitEstimation: EventHandler<EstimationResult> = ({ io, socket }, { room, result }) => {
  room.getAdmin(socket.id);
  room.getTask().reassignFinalResult(Number(result));
  room.archiveTask();
  room.clearVotes();

  const message: string = 'The task was saved in history';

  io.to(room.id).emit('FEED', message);
  io.to(room.id).emit('TASK_ARCHIVED', room.history);
  io.to(room.id).emit('ESTIMATION_SUBMITTED', room.getTask());
  io.to(room.id).emit('VOTES_CLEARED', room.getUsers());
};
export { onSubmitEstimation };
