import { expect } from 'chai';
import { primeFactors } from '../../src/lib';

describe('primeFactors', () => {
  it('returns prime factors of 13195', () => {
    expect(primeFactors(13195)).to.eql([5, 7, 13, 29]);
  });
});
