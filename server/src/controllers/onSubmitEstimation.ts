import { AuthPayload, EventHandler } from '@typings*';

const onSubmitEstimation: EventHandler<AuthPayload> = ({ io }, { room }) => {
  room.archiveTask();
  room.clearVotes();

  const message: string = 'The task was saved in history';

  io.to(room.id).emit('FEED', message);
};
export { onSubmitEstimation };
