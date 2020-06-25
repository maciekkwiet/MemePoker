import { Room } from './Room';

class Rooms {
  private readonly rooms: Room[] = [];

  getRoom(roomId: number): Room {
    //Do wywalenia
    const room = this.rooms.find(({ id }) => id === roomId) ?? rooms.createRoom();
    return room;
  }

  public createRoom(): Room {
    let uniqueId = this.createRandomId();

    if (this.checkId(uniqueId)) {
      const room = new Room(uniqueId);
      this.rooms.push(room);
      return room;
    }
  }
  private createRandomId(): number {
    return Math.floor(Math.random() * 10000);
  }
  private checkId(id): boolean {
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
