import { type } from 'os';

class Analysis {
  average: number;
  median: number;
  standardDeviation: number;

  constructor(array: string[]) {
    const fitered = this.checkArray(array);

    this.average = this.countAverage(fitered);
    this.median = this.countMedian(fitered);
    this.standardDeviation = this.countStandardDeviation(fitered);
  }
  countMedian(array: number[]) {
    const mid = Math.floor(array.length / 2),
      nums = [...array].sort((a, b) => a - b);
    return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
  countStandardDeviation(array: number[]) {
    const avg = this.countAverage(array);
    const squareDiffs = array.map(function (value) {
      const diff = value - avg;
      const sqrDiff = diff * diff;
      return sqrDiff;
    });
    const avgSquareDiff = squareDiffs.reduce((a, b) => a + b, 0) / squareDiffs.length;
    const stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }
  countAverage(array: number[]) {
    let sum = array.reduce((sum, x) => sum + x);
    const avg = sum / array.length;
    return avg;
  }
  checkArray(array: string[]): number[] {
    const checked = array
      .map(i => parseInt(i, 10))
      .filter(i => {
        return i >= 0;
      });
    return checked;
  }
}
export { Analysis };
