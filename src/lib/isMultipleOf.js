export default function isMultipleOf(number, multiples, { all = false } = {}) {
  if (!Number.isInteger(number)) {
    throw new Error('number must be integer');
  }

  if (!Array.isArray(multiples)) {
    throw new Error('multiples must be an array');
  }

  if (!multiples.every(m => Number.isInteger(m))) {
    throw new Error('multiples must be an array of integers');
  }

  const check = multiple => number % multiple === 0;
  if (all) {
    return multiples.every(check);
  }
  return multiples.some(check);
}
