import { Room } from './Room';

class Rooms {
  private readonly rooms: Room[] = [];

  getRoom(roomId: number): Room {
    //Do wywalenia
    const room = this.rooms.find(({ id }) => id === roomId) ?? rooms.createRoom();
    return room;
  }

  createRoom(): Room {
    let uniqueId = this.createRandomId();
    while (this.checkId(uniqueId)) {
      uniqueId = this.createRandomId();
    }
    const room = new Room(uniqueId);
    this.rooms.push(room);
    return room;
  }

  private createRandomId(): number {
    return Math.floor(Math.random() * 9000 + 1000);
  }

  private checkId(id: number): boolean {
    let status: boolean = false;
    this.rooms.map(room => {
      room.id == id ? (status = true) : null;
    });
    return status;
  }
}

//Temporary solution
const rooms = new Rooms();
export { rooms };
