import * as socketio from 'socket.io';
import * as http from 'http';
import { onUserVote } from '@services/onUserVote';
import { onUserJoin } from '@services/onUserJoin';

const socketController = (server: http.Server): void => {
  const io = socketio(server);

  io.on('connect', (socket: socketio.Socket): void => {
    socket.on('USER_JOINED', onUserJoin(io, socket));
    socket.on('USER_VOTED', onUserVote(io, socket));
  });
};

export { socketController };
