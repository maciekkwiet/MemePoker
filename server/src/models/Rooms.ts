import { Room } from './Room';

class Rooms {
  private readonly rooms: Room[] = [];

  getRoom(roomId: number): Room {
    //Do wywalenia
    const room = this.rooms.find(({ id }) => id === roomId) ?? rooms.createRoom(roomId);
    return room;
  }

  private createRoom(roomId: number): Room {
    const room = new Room(roomId);
    this.rooms.push(room);
    return room;
  }
}

//Temporary solution
const rooms = new Rooms();
export { rooms };
