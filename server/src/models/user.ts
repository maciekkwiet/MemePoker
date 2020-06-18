class User {
  name: string;
  vote: number;
  isAdmin: boolean;
  constructor(name: string, vote: number, isAdmin: boolean) {
    this.name = name;
    this.vote = vote;
    this.isAdmin = isAdmin;
  }
}
export default User;
