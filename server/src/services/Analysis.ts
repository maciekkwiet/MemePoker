class Analysis {
  average: number;
  median: number;
  standardDeviation: number;

  constructor(array: number[]) {
    this.average = array.reduce((a, b) => a + b, 0) / array.length;
    this.median = this.countMedian(array);
    this.standardDeviation = this.countStandardDeviation(array);
  }
  countMedian(array: number[]) {
    const mid = Math.floor(array.length / 2),
      nums = [...array].sort((a, b) => a - b);
    return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
  countStandardDeviation(array: number[]) {
    const squareDiffs = array.map(function (value) {
      const diff = value - this.average;
      const sqrDiff = diff * diff;
      return sqrDiff;
    });

    const avgSquareDiff = squareDiffs.reduce((a, b) => a + b, 0) / squareDiffs.length;
    const stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }
}
export { Analysis };
