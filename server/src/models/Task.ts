import { Analysis } from '@services/Analysis';
export interface Result {
  name: string;
  vote: number | null;
}

class Task {
  private timeStamp: number;
  public readonly title: string;
  private results: Result[];
  private estimationTime: number | null;
  private finalResult: number | null;
  private Analysis: Analysis | null;

  constructor(title: string) {
    this.title = title;
    this.timeStamp = new Date().getTime();
    this.results = [];
    this.estimationTime = null;
    this.finalResult = null;
    this.Analysis = null;
  }

  setResults(votes: Result[]): void {
    this.results = votes;
  }
  setEstimationTime(): void {
    this.estimationTime = new Date().getTime() - this.timeStamp;
  }
  setFinalResult(): void {
    const voteValues: number[] = [];
    this.results.forEach(vote => {
      if (vote.vote !== null) voteValues.push(vote.vote);
    });
    this.finalResult = voteValues.reduce((a, b) => a + b, 0) / voteValues.length;
  }
  reassignFinalResult(reassignedResult: number): void {
    this.finalResult = reassignedResult;
  }
  analyzeResults(): void {
    const voteValues: number[] = [];
    this.results.forEach(vote => {
      if (vote.vote !== null) voteValues.push(vote.vote);
    });
    this.Analysis = new Analysis(voteValues);
  }
}
export { Task };
