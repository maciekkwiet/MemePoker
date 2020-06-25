import { Room } from './Room';

class Rooms {
  private readonly rooms: Room[] = [];

  getRoom(roomId: number): Room {
    const room = this.rooms.find(({ id }) => id === roomId);
    if (typeof room === 'undefined') throw new Error();
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

  private checkId(roomId: number): boolean {
    const room = this.rooms.find(({ id }) => id === roomId);
    return typeof room === 'undefined' ? false : true;
  }
}

//Temporary solution
const rooms = new Rooms();
export { rooms };
