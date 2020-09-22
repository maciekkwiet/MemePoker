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

  inactiveRooms() {
    setInterval(() => this.deleteRooms(), 1800000);
  }

  deleteRooms() {
    const roomsToDelete: string[] = [];
    let inactiveRooms: string | null = null;

    if (this.rooms) {
      this.rooms.map(room => {
        inactiveRooms = room.howLongInactive(new Date().getTime());
        if (inactiveRooms) {
          roomsToDelete.push(inactiveRooms);
          inactiveRooms = null;
        }
      });

      if (roomsToDelete.length) {
        roomsToDelete.map(room => {
          const index = this.getRoomId().indexOf(room);
          this.rooms.splice(index, 1);
        });
      }
    }
  }

  private getRoomId() {
    const allRoomsId: string[] = [];
    this.rooms.map(room => {
      allRoomsId.push(room.id);
    });
    return allRoomsId;
  }
}

const rooms = new Rooms();
rooms.inactiveRooms();
export { rooms };
