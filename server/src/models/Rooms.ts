import { Room } from './Room';

class Rooms {
  private readonly rooms: Room[] = [];

  getRoom(roomId: string): Room {
    const room = this.rooms.find(({ id }) => id == roomId);
    if (typeof room === 'undefined') throw new Error('Room not found');
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
      throw new Error('All rooms are busy');
    }
  }

  isRoomFree(): boolean {
    return this.rooms.length === 9000 ? false : true;
  }

  private createRandomId(): string {
    return Math.floor(Math.random() * 9000 + 1000).toString(10);
  }

  private checkId(roomId: string): boolean {
    return this.rooms.some(({ id }) => id === roomId) ? true : false;
  }
}

const rooms = new Rooms();
export { rooms };
