import { Room } from '@models/Room';
import { User } from '@models/User';

export type ResponseCallback = (data: any) => void;

export type EventHandler<T> = (context: Context, payload: T, callback?: ResponseCallback) => void;

export type EventHandlerWrapper = (
  context: Context,
  handler: EventHandler<unknown>
) => (payload: unknown, callback?: ResponseCallback) => void;

export type Middlewere = (packet: SocketIO.Packet, next: (err?: any) => void) => void;

export interface Context {
  io: SocketIO.Server;
  socket: SocketIO.Socket;
}

export interface UserJoinPayload {
  name: string;
  roomId: string;
  isAdmin: boolean;
  callback: (data: any) => void;
}

export interface AuthPayload {
  room: Room;
  user: User;
}

export interface UserVotePayload extends AuthPayload {
  value: number;
}

export interface NewTaskPayload extends AuthPayload {
  task: string;
}
