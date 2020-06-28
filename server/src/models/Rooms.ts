import { Room } from './Room';

class Rooms {
  private readonly rooms: Room[] = [];

  getRoom(roomId: number): Room | string {
    const room = this.rooms.find(({ id }) => id === roomId);
    if (typeof room === 'undefined') return 'No room';
    return room;
  }

  createRoom() {
    let uniqueId = this.createRandomId();
    if (this.isRoomFree()) {
      while (this.checkId(uniqueId)) {
        uniqueId = this.createRandomId();
      }
      const room = new Room(uniqueId);
      this.rooms.push(room);
      return room;
    } else {
      return new Error();
    }
  }

  isRoomFree(): boolean {
    return this.rooms.length === 9000 ? false : true;
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
