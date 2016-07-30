import isMultipleOf from './isMultipleOf';

export default function sumMultiplesUpTo(max, multiples, { all = false } = {}) {
  if (!Number.isInteger(max) || max < 0) {
    throw new Error('number must be a positive integer');
  }

  let sum = 0;
  let n;
  for (n = 1; n <= max; n++) {
    if (isMultipleOf(n, multiples, { all })) {
      sum += n;
    }
  }

  return sum;
}
