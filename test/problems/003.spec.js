import { expect } from 'chai';
import problem003 from '../../src/problems/003';

describe('problem003', () => {
  it('returns largest prime factor of 600851475143', () => {
    expect(problem003()).to.eql(6857);
  });
});
