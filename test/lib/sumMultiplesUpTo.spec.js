import { expect } from 'chai';
import { sumMultiplesUpTo } from '../../src/lib';

describe('sumMultiplesUpTo', () => {
  it('gives proper sum of multiples of 3 OR 5 up to 100', () => {
    expect(sumMultiplesUpTo(100, [3, 5])).to.eql(2418);
  });

  it('gives proper sum of multiples of 3 AND 5 up to 100', () => {
    expect(sumMultiplesUpTo(100, [3, 5], { all: true })).to.eql(315);
  });
});
