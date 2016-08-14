import { expect } from 'chai';
import problem004 from '../../src/problems/004';

describe('problem004', () => {
  it('returns largest palindrome product of 2 3-digit numbers', () => {
    expect(problem004()).to.eql(906609);
  });
});
