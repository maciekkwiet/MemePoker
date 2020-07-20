class User {
  readonly name: string;
  readonly socket: string;
  readonly isAdmin: boolean;

  vote: number | null;

  constructor(name: string, id: string, isAdmin: boolean) {
    this.name = name;
    this.socket = id;
    this.isAdmin = isAdmin;
    this.vote = null;
    console.log('test');
  }
}
export { User };
