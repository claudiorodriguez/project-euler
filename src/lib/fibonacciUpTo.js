export default function fibonacciUpTo(max) {
  if (!Number.isInteger(max) || max < 0) {
    throw new Error('argument must be a positive integer');
  }

  const sequence = [];
  let idx;
  let last = 0;
  for (idx = 0; last < max; idx++) {
    last = ((sequence[idx - 2] || 0) + (sequence[idx - 1] || 0)) || 1;
    if (last < max) {
      sequence.push(last);
    }
  }

  return sequence;
}
