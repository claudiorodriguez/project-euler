export default function isEvenlyDivisible(number, divisors) {
  if (!Number.isInteger(number)) {
    throw new Error('number must be integer');
  }

  if (!Array.isArray(divisors) || !divisors.every(n => Number.isInteger(n))) {
    throw new Error('divisors must be an array of integers');
  }

  return divisors.every(divisor => number % divisor === 0);
}
