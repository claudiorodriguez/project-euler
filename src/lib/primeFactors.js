export default function primeFactors(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new Error('argument must be a positive integer');
  }

  const factors = [];
  let root;
  let x;
  let n = number;
  let keepGoing = n > 1;

  while (keepGoing) {
    root = Math.sqrt(n);
    x = 2;
    if (n % x) {
      x = 3;
      while (n % x && x < root) {
        x += 2;
      }
    }
    x = (x > root) ? n : x;
    factors.push(x);
    keepGoing = (x !== n);
    n = n / x;
  }

  return factors;
}
