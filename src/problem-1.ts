function sumArray(arr: number[]): number {
  const sum = arr.reduce((prev, curr) => prev + curr, 0);
  return sum;
}

const sum: number = sumArray([1, 2, 3, 4, 5]);

console.log(sum);
