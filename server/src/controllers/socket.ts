import * as socketio from 'socket.io';
import * as http from 'http';
import { Rooms } from 'models/Rooms';
import { onUserVote } from '@services/onUserVote';
import { onUserJoin } from '@services/onUserJoin';

const socketController = (server: http.Server): void => {
  const io = socketio(server);
  const rooms = new Rooms(null);

  io.on('connect', (socket: socketio.Socket): void => {
    socket.on('USER_JOINED', onUserJoin(io, rooms, socket));
    socket.on('USER_VOTED', onUserVote(io, rooms, socket));
  });
};

export { socketController };
