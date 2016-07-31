import { expect } from 'chai';
import { largestInteger } from '../../src/lib';

describe('largestInteger', () => {
  it('returns largest in array', () => {
    const terms = [24, 524, 75, 42, 62, 23, 23, 2, 3];
    expect(largestInteger(terms)).to.eql(524);
  });
});
