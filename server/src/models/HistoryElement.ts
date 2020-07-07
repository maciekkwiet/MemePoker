import { Room } from './Room';
import { User } from './User';

class HistoryElement {
  roomid: number;
  task: string;
  votes: Array<Pick<User, 'name' | 'vote'>>;

  constructor(room: Room) {
    this.roomid = room.id;
    this.task = room.task;
    this.votes = room.getVotes();
  }
}

export { HistoryElement };
