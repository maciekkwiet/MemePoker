class Analysis {
  average: number;
  median: number;
  standardDeviation: number;

  constructor(voteValues: string[]) {
    const fitered = this.checkArray(voteValues);
    this.average = this.countAverage(fitered);
    this.median = this.countMedian(fitered);
    this.standardDeviation = this.countStandardDeviation(fitered);
  }
  private countMedian(array: number[]) {
    const mid = Math.floor(array.length / 2),
      nums = [...array].sort((a, b) => a - b);
    return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
  private countStandardDeviation(array: number[]) {
    console.log('odchylenie this', this);
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
