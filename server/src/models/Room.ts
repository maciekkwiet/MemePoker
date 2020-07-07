import { User } from '@models/User';
import { Task } from '@models/Task';

class Room {
  id: number;
  private task: Task;
  private users: User[];
  private history: Task[];

  constructor(id: number) {
    this.id = id;
    this.task = new Task('');
    this.users = [];
    this.history = [];
  }

  getUser(name: string): User {
    const user = this.users.find(user => user.name === name);
    if (!user) throw new Error(`User ${name} does not belong to room ${this.id}`);
    return user;
  }

  getAdmin(id: string): User | null {
    const roomAdmin = this.users.find(user => user.isAdmin === true) ?? null;
    if (roomAdmin?.socket === id) throw new Error('This user is admin in different room');
    return roomAdmin;
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
