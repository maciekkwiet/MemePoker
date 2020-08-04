class User {
  readonly socket: string;
  readonly name: string;
  readonly isAdmin: boolean;
  readonly isObserver: boolean;

  vote: number | null;

  constructor(name: string, id: string, isAdmin: boolean, isObserver: boolean) {
    this.name = name;
    this.socket = id;
    this.isAdmin = isAdmin;
    this.vote = null;
    this.isObserver = isObserver;
  }
}
export { User };
