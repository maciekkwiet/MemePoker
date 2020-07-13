class Task {
  public timeStamp: number;
  public title: string;

  constructor(title: string) {
    this.title = title;
    this.timeStamp = new Date().getTime();
  }
}
export { Task };
