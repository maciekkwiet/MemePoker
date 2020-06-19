import { User } from 'models/User';

class Room {
  roomId: number;
  users: User[];
  constructor(roomId: number, users: User[]) {
    this.roomId = roomId;
    if (!this.users) this.users = [];
  }

  doesUserExist(user: User) {
    let userExist: boolean = false;
    this.users.map((existingUser: User) => (existingUser.name == user.name ? (userExist = true) : ''));
    return userExist;
  }

  changeVote(name: string, value: number) {
    this.users.map((user: User) => {
      user.name == name ? (user.vote = value) : null;
    });
  }
}

export { Room };
