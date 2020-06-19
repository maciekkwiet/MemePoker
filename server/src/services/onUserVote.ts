import * as socketio from 'socket.io';
import { Rooms } from 'models/Rooms';

const dbKey: any = process.env.DB_KEY;

const mongoose = require('mongoose');

const { User } = require('../models/user');

interface UserVotePayload {
  name: string;
  value: number;
  roomId: number;
}

const onUserVote = (io: socketio.Server, rooms: Rooms, socket: socketio.Socket) => async ({
  name,
  value,
  roomId,
}: UserVotePayload) => {
  rooms.vote(name, value, roomId);
  const message = `${name} has voted ${value} in the room: ${roomId.toString()}`;
  console.log(message);
  io.to(roomId.toString()).emit('FEED', message);
};

export { onUserVote };

//redis
//higherorderfunction
//higherordercomponent
//closure
