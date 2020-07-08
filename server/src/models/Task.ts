import { User } from '@models/User';

class Task {
  private timeStamp: number;
  public readonly title: string;
  private votes: Array<Pick<User, 'name' | 'vote'>>;
  private estimationTime: number | null;
  private finalResult: number | null;

  constructor(title: string) {
    this.title = title;
    this.timeStamp = new Date().getTime();
    this.votes = [];
    this.estimationTime = null;
    this.finalResult = null;
  }

  setVotes(votes: Array<Pick<User, 'name' | 'vote'>>): void {
    this.votes = votes;
  }
  setEstimationTime(): void {
    this.estimationTime = new Date().getTime() - this.timeStamp;
  }
  setFinalResult(): void {
    const voteValues: number[] = [];
    this.votes.forEach(vote => {
      if (vote.vote !== null) voteValues.push(vote.vote);
    });
    this.finalResult = voteValues.reduce((a, b) => a + b, 0) / voteValues.length;
  }
  reassignFinalResult(reassignedResult: number) {
    this.finalResult = reassignedResult;
  }
}
export { Task };
