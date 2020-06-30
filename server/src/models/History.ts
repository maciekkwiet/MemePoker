class History {
  roomid: number;
  task: string;
  votes: number[];

  constructor(id: number) {
    this.roomid = id;
    this.task = '';
    this.votes = [];
  }

  add() {}
}

export { History };
