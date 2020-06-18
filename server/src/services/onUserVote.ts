import * as socketio from 'socket.io';

const dbKey: any = process.env.DB_KEY;

const mongoose = require('mongoose');

const { User } = require('../models/user');

interface UserVotePayload {
  name: string;
  value: number;
  roomId: string;
}

const onUserVote = (io: socketio.Server, socket: socketio.Socket) => async ({
  name,
  value,
  roomId,
}: UserVotePayload) => {
  try {
    //console.log(User);
    //let userInDB = await dbKey.findOne({ name: name, room: roomId });
    // console.log(userInDB);
    // const update = { value: value };
    // await userInDB.updateOne(update);
    // const userdInDB = await User.findOne({ name: name, room: roomId });
    // console.log(userdInDB);
  } catch (e) {
    //console.log(e);
  }

  const message = `${name} has voted ${value} in the room: ${roomId}`;

  // console.log(message);
  io.to(roomId).emit('FEED', message);
};

export { onUserVote };

//redis
//higherorderfunction
//higherordercomponent
//closure
