import User from 'models/User';

class Room {
  roomId: number;
  users: User[];
  constructor(roomId: number, users: User[]) {
    this.roomId = roomId;
    if (!this.users) this.users = [];

    // this.users.forEach((activeUser) => {});
    // sprawdzenie czy juz taki jest, jak nie to tworzymy nowego
  }
}
// function isUserCreated(user: User) {
//   let checkedNames = [];
//   checkedNames = this.users.filter((name: string) => {
//     id = roomId;
//   });
//   //console.log(checkedId);
//   if (checkedId.length > 0) return true;
//   else return false;
// }

export { Room };
