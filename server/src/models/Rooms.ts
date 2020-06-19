import { Room } from './Room';
import { User } from './User';

class Rooms {
  public rooms: Room[];
  constructor(rooms: Room[]) {
    if (!this.rooms) this.rooms = [];
  }

  doesRoomExist(roomId: number, newUser: User): boolean {
    let roomExist: boolean = false;
    const param = this.rooms.map((existingRoom: Room) => {
      existingRoom.roomId == roomId ? (roomExist = true) : '';
    });
    let messageStatus = roomExist ? this.roomExist(roomId, newUser) : this.roomNoExist(roomId, newUser);
    return messageStatus;
  }

  roomExist(roomId: number, newUser: User) {
    let messageStatus: boolean;
    this.rooms.map((room: Room) => {
      if (room.roomId == roomId && !room.doesUserExist(newUser)) {
        room.users.push(newUser);
        messageStatus = true;
      } else messageStatus = false;
    });
    return messageStatus;
  }

  roomNoExist(roomId: number, newUser: User): boolean {
    const newRoom = new Room(roomId, null);
    newRoom.users.push(newUser);
    this.rooms.push(newRoom);
    return true;
  }
}
export { Rooms };
