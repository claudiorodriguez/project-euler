import { expect } from 'chai';
import problem002 from '../../src/problems/002';

describe('problem002', () => {
  it('gives proper sum of even terms of fibonacci <= 4000000', () => {
    expect(problem002()).to.eql(4613732);
  });
});
