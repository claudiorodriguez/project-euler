export default function isPalindrome(number) {
  if (!Number.isInteger(number)) {
    throw new Error('number must be integer');
  }

  const str = String(number);

  for (let x = 0; x < str.length; x++) {
    if (str.charAt(x) !== str.charAt(str.length - 1 - x)) {
      return false;
    }
  }

  return true;
}
