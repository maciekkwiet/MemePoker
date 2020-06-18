class User {
  name: string;
  vote: number;
  isAdmin: boolean;
  constructor(name: string, vote: number, isAdmin: boolean) {
    this.name = name;
    this.vote = vote;
    this.isAdmin = isAdmin;
  }
}

class Room {
  roomId: number;
  users: User[];
  constructor(roomId: number, users: User[]) {
    this.roomId = roomId;
    if (!this.users) this.users = [];
    const user = users[0];
    // sprawdzenie czy juz taki jest, jak nie to tworzymy nowego
    const userRoom = new User(user.name, user.vote, user.isAdmin);
    this.users.push(userRoom);
  }
}

export default Room;
