import { Room } from '@models/Room';
import { User } from '@models/User';

export interface AuthPayload {
  room: Room;
  user: User;
}

export type EventHandler<T extends AuthPayload> = (context: Context, payload: T) => void;
export type Middlewere = (packet: SocketIO.Packet, next: (err?: any) => void) => void;

export interface Context {
  io: SocketIO.Server;
  socket: SocketIO.Socket;
}

export interface UserVotePayload extends AuthPayload {
  value: number;
}

export interface NewTaskPayload extends AuthPayload {
  task: string;
}
