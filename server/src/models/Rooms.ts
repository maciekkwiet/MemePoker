import { Room } from './Room';
import { User } from './User';

class Rooms {
  public rooms: Room[];

  constructor(rooms: Room[]) {
    if (!this.rooms) this.rooms = [];
  }

  doesRoomExist(roomId: number): boolean {
    let roomExist: boolean = false;
    const param = this.rooms.map((existingRoom: Room) => {
      existingRoom.roomId == roomId ? (roomExist = true) : '';
    });
    return roomExist;
  }
}
export { Rooms };
