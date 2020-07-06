import { User } from '@models/User';
import { Task } from '@models/Task';

class Room {
  id: number;
  private task: Task;
  private users: User[];

  constructor(id: number) {
    this.id = id;
    this.task = new Task('');
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

  clearVotes() {
    this.users.map(user => (user.vote = null));
  }

  getUsers(): User[] {
    return [...this.users];
  }

  getVotes(): Array<Pick<User, 'name' | 'vote'>> {
    return this.users.map(user => ({ name: user.name, vote: user.vote }));
  }
  getTask(): Task {
    return this.task;
  }
  setTask(title: string): void {
    if (!title) throw new Error('Task title is empty');
    this.task = new Task(title);
  }
}

export { Room };
