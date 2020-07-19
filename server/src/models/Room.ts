import { User } from '@models/User';
import { Task } from '@models/Task';

class Room {
  readonly id: string;
  private task: Task;
  private readonly users: User[];
  private readonly history: Task[];

  constructor(id: string) {
    this.id = id;
    this.task = new Task('Waiting for first task to estimate...');
    this.users = [];
    this.history = [];
  }

  getUser(name: string): User {
    const user = this.users.find(user => user.name === name);
    if (!user) throw new Error(`User ${name} does not belong to room ${this.id}`);
    return user;
  }

  isAdmin(name: string): Boolean {
    return this.users.some(user => user.isAdmin === true && user.name === name);
  }

  addUser(user: User): void {
    const name = user.name;

    if (this.users.find(user => user.name === name)) throw new Error('This user nam already exists in room');
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

  archiveTask() {
    this.history.push(this.task);
  }
}

export { Room };
