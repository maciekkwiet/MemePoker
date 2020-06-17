import * as socketio from 'socket.io';
const { User } = require('../models/user');

interface UserJoinPayload {
  name: string;
  roomId: string;
}

const onUserJoin = (io: socketio.Server, socket: socketio.Socket) => async ({ name, roomId }: UserJoinPayload) => {
  const createUser = async (data: any) => {
    try {
      const user = new User(data);
      await user.save();
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };

  let userInDB = await User.findOne({ name: name, room: roomId });
  if (userInDB) {
    const message = `${name} is already used`;
    console.log(message);
    io.to(roomId).emit('FEED', message);
  } else {
    createUser({
      name: name,
      room: roomId,
    });
    const message = `${name} has joined the room: ${roomId}`;
    console.log(message);
    socket.join(roomId);
    io.to(roomId).emit('FEED', message);
  }
};

export { onUserJoin };
