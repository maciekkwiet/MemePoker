interface Admin {
  isAdmin: boolean;
  socket: string | null;
}

class User {
  public vote: number | null;
  public admin: Admin;

  constructor(public name: string, isAdmin: boolean) {
    this.vote = null;
    this.admin = {
      isAdmin: isAdmin,
      socket: null,
    };
  }
}
export { User };
