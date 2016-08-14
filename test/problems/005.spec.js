import { expect } from 'chai';
import problem005 from '../../src/problems/005';

describe('problem005', () => {
  it('returns smallest evenly divisible by 1..20', () => {
    expect(problem005()).to.eql(232792560);
  });
});
