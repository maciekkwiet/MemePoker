class Analysis {
  average: number | string;
  median: number | string;
  standardDeviation: number | string;

  constructor(voteValues: number[]) {
    if (voteValues) {
      this.average = this.countAverage(voteValues);
      this.median = this.countMedian(voteValues);
      this.standardDeviation = this.countStandardDeviation(voteValues);
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
}
export { Analysis };
