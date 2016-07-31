export default function evenTerms(numbers) {
  if (!Array.isArray(numbers) || !numbers.every(n => Number.isInteger(n))) {
    throw new Error('argument must be an array of integers');
  }

  return numbers.filter(n => n % 2 === 0);
}
