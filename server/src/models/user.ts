class User {
  public vote: number | null;

  constructor(public name: string, public isAdmin: boolean) {
    this.vote = null;
  }
}
export { User };
