import { Room } from '@models/Room';
import { User } from '@models/User';

export interface UserJoinPayload {
  name: string;
  roomId: string;
  isAdmin: boolean;
  isObserver: boolean;
  callback: (data: any) => void;
}

export interface AuthPayload {
  room: Room;
  user: User;
}

export interface UserVotePayload extends AuthPayload {
  value: string;
}

export interface NewTaskPayload extends AuthPayload {
  task: string;
}

export interface EstimationResult extends AuthPayload {
  result: string;
  roomId: string;
}

export interface UserKickPayload extends AuthPayload {
  name: string;
  id: string;
}
