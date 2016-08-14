import { isEvenlyDivisible } from '../../lib';

export default () => {
  const divisors = [11, 13, 14, 16, 17, 18, 19, 20];
  let smallestEvenlyDivisible;
  let n;

  for (n = 2520; !smallestEvenlyDivisible; n += 2520) {
    if (isEvenlyDivisible(n, divisors)) {
      smallestEvenlyDivisible = n;
    }
  }

  return smallestEvenlyDivisible;
};
