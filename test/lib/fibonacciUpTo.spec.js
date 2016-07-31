import { expect } from 'chai';
import { fibonacciUpTo } from '../../src/lib';

describe('fibonacciUpTo', () => {
  it('gives proper sequence up to 1000', () => {
    expect(fibonacciUpTo(1000)).to.eql([
      1,
      1,
      2,
      3,
      5,
      8,
      13,
      21,
      34,
      55,
      89,
      144,
      233,
      377,
      610,
      987,
    ]);
  });
});
