import { expect } from 'chai';
import problem001 from '../../src/problems/001';

describe('problem001', () => {
  it('gives proper sum of multiples of 3 OR 5 below 1000', () => {
    expect(problem001()).to.eql(233168);
  });
});
