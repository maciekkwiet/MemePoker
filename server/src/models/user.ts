class User {
  public vote: number | null;
  public socket: string | null;

  constructor(public name: string, public isAdmin: boolean) {
    this.vote = null;
    this.socket = null;
  }
}
export { User };
