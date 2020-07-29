class Analysis {
  average: number | string;
  median: number | string;
  standardDeviation: number | string;

  constructor(voteValues: string[]) {
    const fitered = this.checkArray(voteValues);
    if (fitered.length > 0) {
      this.average = this.countAverage(fitered);
      this.median = this.countMedian(fitered);
      this.standardDeviation = this.countStandardDeviation(fitered);
    } else {
      this.average = 'Unable to calculate';
      this.median = 'Unable to calculate';
      this.standardDeviation = 'Unable to calculate';
    }
  }
  private countMedian(array: number[]): number {
    const mid = Math.floor(array.length / 2),
      nums = [...array].sort((a, b) => a - b);
    return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
  private countStandardDeviation(array: number[]) {
    const squareDiffs = array.map(value => {
      const diff = value - this.average;
      const sqrDiff = diff * diff;
      return sqrDiff;
    });
    const avgSquareDiff = squareDiffs.reduce((a, b) => a + b, 0) / squareDiffs.length;
    const stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }
  private countAverage(array: number[]) {
    let sum = array.reduce((sum, x) => sum + x);
    const avg = sum / array.length;
    return avg;
  }
  private checkArray(voteValues: string[]): number[] {
    return voteValues.map(i => parseInt(i, 10)).filter(i => i >= 0);
  }
}
export { Analysis };
