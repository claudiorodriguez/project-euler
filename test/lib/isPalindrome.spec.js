import { expect } from 'chai';
import { isPalindrome } from '../../src/lib';

describe('isPalindrome', () => {
  it('returns true for palindromes', () => {
    expect(isPalindrome(137731)).to.eql(true);
    expect(isPalindrome(85658)).to.eql(true);
    expect(isPalindrome(3494789119874943)).to.eql(true);
    expect(isPalindrome(11)).to.eql(true);
  });

  it('returns false for non-palindrome', () => {
    expect(isPalindrome(13)).to.eql(false);
    expect(isPalindrome(8565)).to.eql(false);
    expect(isPalindrome(4382847)).to.eql(false);
    expect(isPalindrome(38492738)).to.eql(false);
  });

  it('throws error on non-numbers', () => {
    expect(() => isPalindrome('a')).to.throw(Error);
    expect(() => isPalindrome([1, 2, 3])).to.throw(Error);
    expect(() => isPalindrome({ a: 1 })).to.throw(Error);
  });
});
