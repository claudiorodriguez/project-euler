import { expect } from 'chai';
import { sumIntegers } from '../../src/lib';

describe('sumIntegers', () => {
  it('gives proper sum of integers 1..1000', () => {
    const terms = [];
    for (let n = 1; n <= 1000; n++) {
      terms.push(n);
    }
    expect(sumIntegers(terms)).to.eql(500500);
  });
});
