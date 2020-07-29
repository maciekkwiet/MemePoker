import { User } from '@models/User';

export type ResponseCallback = (data: any) => void;

export type EventHandler<T> = (context: Context, payload: T, callback?: ResponseCallback) => void;

export type EventHandlerWrapper = (
  context: Context,
  handler: EventHandler<unknown>
) => (payload: unknown, callback?: ResponseCallback) => void;

export type Middlewere = (context: Context) => (packet: SocketIO.Packet, next: (err?: any) => void) => void;

export interface Context {
  io: SocketIO.Server;
  socket: SocketIO.Socket;
}

export interface TokenPayload {
  roomId: string;
  user: User;
}
