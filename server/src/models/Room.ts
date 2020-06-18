import User from 'models/User';

class Room {
  roomId: number;
  users: User[];
  constructor(roomId: number, user: User) {
    this.roomId = roomId;

    if (!this.users) this.users = [];
    this.users.forEach((activeUser) => {});
    // // sprawdzenie czy juz taki jest, jak nie to tworzymy nowego
    // const userRoom = new User(user.name, user.vote, user.isAdmin);
    // this.users.push(userRoom);
  }
}
function isUserCreated(user: User) {
  let checkedNames = [];
  checkedNames = this.users.filter((name: string) => {
    id = roomId;
  });
  //console.log(checkedId);
  if (checkedId.length > 0) return true;
  else return false;
}

export default Room;
