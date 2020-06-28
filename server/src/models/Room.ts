import { User } from 'models/User';

class Room {
  id: number;
  task: string;
  private users: User[];

  constructor(id: number) {
    this.id = id;
    this.task = '';
    this.users = [];
  }

  getUser(name: string): User | null {
    return this.users.find(user => user.name === name) ?? null;
  }

  addUser(user: User): void {
    if (this.getUser(user.name)) return;
    this.users.push(user);
  }

  hasEveryoneVoted(): boolean {
    return !this.users.some(user => user.vote === null);
  }

  getUsers(): User[] {
    return [...this.users];
  }

  getVotes(): Array<Pick<User, 'name' | 'vote'>> {
    return this.users.map(user => ({ name: user.name, vote: user.vote }));
  }
}

export { Room };
