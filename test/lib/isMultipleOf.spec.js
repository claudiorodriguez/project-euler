import { expect } from 'chai';
import { isMultipleOf } from '../../src/lib';

describe('isMultipleOf', () => {
  it('gives proper multiples of 3 OR 5 for 1-100', () => {
    for (let x = 1; x < 100; x++) {
      expect(isMultipleOf(x, [3, 5])).to.eql((x % 3 === 0 || x % 5 === 0));
    }
  });

  it('gives proper multiples of 3 AND 5 for 1-100', () => {
    for (let x = 1; x < 100; x++) {
      expect(isMultipleOf(x, [3, 5], { all: true })).to.eql((x % 3 === 0 && x % 5 === 0));
    }
  });
});
