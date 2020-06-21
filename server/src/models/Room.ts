import { User } from 'models/User';

class Room {
  id: number;
  private users: User[];

  constructor(id: number) {
    this.id = id;
    this.users = [];
  }

  getUser(name: string): User | null {
    return this.users.find(user => user.name === name) ?? null;
  }

  addUser(user: User): void {
    if (this.getUser(user.name)) return;
    this.users.push(user);
  }
  doesEveryoneVoted() {
    let status: boolean = false;
    this.users.map((user: User) => (user.vote == null ? (status = false) : (status = true)));
    return status;
  }
  getVotes() {
    const votes: Array<object> = [];
    this.users.map((user: User) => votes.push({ user: user.vote }));
    return votes;
  }
}

export { Room };
