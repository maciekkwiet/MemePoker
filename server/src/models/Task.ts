class Task {
  private timeStart: number;

  constructor(public task: string) {
    this.task = task;
    this.timeStart = new Date().getTime();
  }

  getTimeStamp() {
    return new Date().getTime() - this.timeStart;
  }
}
export { Task };
