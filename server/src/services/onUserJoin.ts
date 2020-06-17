import * as socketio from 'socket.io';
const { User } = require('../models/user');

interface UserJoinPayload {
  name: string;
  roomId: string;
}

const onUserJoin = (io: socketio.Server, socket: socketio.Socket) => async ({ name, roomId }: UserJoinPayload) => {
  const createUser = async (data: UserJoinPayload) => {
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
    const message: string = `${name} is already created`;
    console.log(message);
    io.to(roomId).emit('FEED', message);
  } else {
    createUser({
      name: name,
      roomId: roomId,
    });
    const message: string = `${name} has joined the room: ${roomId}`;
    console.log(message);
    socket.join(roomId);
    io.to(roomId).emit('FEED', message);
  }
};

export { onUserJoin };
