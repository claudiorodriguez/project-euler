import { expect } from 'chai';
import { isEvenlyDivisible } from '../../src/lib';

describe('isEvenlyDivisible', () => {
  it('returns true for evenly divisible numbers', () => {
    expect(isEvenlyDivisible(2520, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.eql(true);
    expect(isEvenlyDivisible(100, [1, 2, 4, 5, 10])).to.eql(true);
    expect(isEvenlyDivisible(9, [1, 3])).to.eql(true);
  });

  it('returns false for non evenly divisible numbers', () => {
    expect(isEvenlyDivisible(2520, [15, 17, 20])).to.eql(false);
    expect(isEvenlyDivisible(100, [1, 2, 3, 4, 5, 6])).to.eql(false);
  });

  it('throws error on non-numbers', () => {
    expect(() => isEvenlyDivisible('a')).to.throw(Error);
    expect(() => isEvenlyDivisible('a', [1, 2])).to.throw(Error);
    expect(() => isEvenlyDivisible(100, 10)).to.throw(Error);
    expect(() => isEvenlyDivisible(100, ['a', 'b'])).to.throw(Error);
  });
});
