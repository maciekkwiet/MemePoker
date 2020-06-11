import * as socketio from 'socket.io';

const socketIoWrapper = (server: any): void => {
  const io = socketio(server);
  io.on('connect', (socket: socketio.Socket): void => {
    socket.on('VOTE', ({ name, value, room }) => {
      console.log(name, 'has voted', value, 'in room', room);
      io.emit('VOTED', name + ' has voted ');
    });
  });
};

export { socketIoWrapper };
