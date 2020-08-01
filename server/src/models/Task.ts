import { Analysis } from '@services/Analysis';
export interface Result {
  name: string;
  vote: string | null;
}

class Task {
  private timeStamp: number;
  readonly title: string;
  private results: Result[];
  private estimationTime: number | null;
  private finalResult: number | null;
  private analysis: Analysis | null;

  constructor(title: string) {
    this.title = title;
    this.timeStamp = new Date().getTime();
    this.results = [];
    this.estimationTime = null;
    this.finalResult = null;
    this.analysis = null;
  }

  setResults(votes: Result[]): void {
    this.results = votes;
  }

  setEstimationTime(): void {
    this.estimationTime = new Date().getTime() - this.timeStamp;
  }

  setFinalResult(): void {
    const voteValues: string[] = [];
    this.results.map(result => {
      if (result.vote !== null) voteValues.push(result.vote);
    });
    this.finalResult = voteValues.map(result => parseInt(result, 10)).reduce((a, b) => a + b, 0) / voteValues.length;
  }

  reassignFinalResult(reassignedResult: number): void {
    this.finalResult = reassignedResult;
  }

  analyzeResults(): void {
    const voteValues: string[] = [];
    this.results.forEach(result => {
      if (result.vote !== null) voteValues.push(result.vote);
    });
    this.analysis = new Analysis(voteValues);
  }
}
export { Task };
