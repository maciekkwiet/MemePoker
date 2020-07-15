class User {
  name: string;
  readonly socket: string;
  readonly isAdmin: boolean;

  vote: number | null;

  constructor(name: string, id: string, isAdmin: boolean) {
    this.name = name;
    this.socket = id;
    this.isAdmin = isAdmin;
    this.vote = null;
  }
}
export { User };
