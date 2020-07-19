import { Room } from '@models/Room';
import { User } from '@models/User';

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
