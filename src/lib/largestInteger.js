export default function largestInteger(numbers) {
  if (!Array.isArray(numbers) || !numbers.every(n => Number.isInteger(n))) {
    throw new Error('argument must be an array of integers');
  }

  return numbers.reduce((prev, curr) => (prev > curr ? prev : curr));
}
