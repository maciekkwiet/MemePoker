import * as socketio from 'socket.io';
import * as http from 'http';
import { onUserVote } from '@controllers/onUserVote';
import { onUserJoin } from '@controllers/onUserJoin';
import { onNewTask } from '@controllers/onNewTask';
import { onSubmitEstimation } from '@controllers/onSubmitEstimation';

const socketController = (server: http.Server): void => {
  const io = socketio(server);

  io.on('connect', (socket: socketio.Socket): void => {
    socket.on('USER_JOINED', onUserJoin(io, socket));
    socket.on('USER_VOTED', onUserVote(io, socket));
    socket.on('NEW_TASK', onNewTask(io, socket));
    socket.on('SUBMIT_ESTIMATION', onSubmitEstimation(io, socket));
  });
};

export { socketController };
