import { isPalindrome } from '../../lib';

export default () => {
  let x;
  let y;
  let product;
  let largestPalindrome = 0;

  for (x = 100; x < 1000; x++) {
    for (y = 100; y < 1000; y++) {
      product = x * y;
      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }

  return largestPalindrome;
};
