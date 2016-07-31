import { expect } from 'chai';
import { evenTerms } from '../../src/lib';

describe('evenTerms', () => {
  it('filters even numbers from 1..1000', () => {
    const terms = [];
    for (let n = 1; n <= 1000; n++) {
      terms.push(n);
    }
    const allEven = evenTerms(terms);
    expect(allEven.length).to.be.eql(500);
    expect(allEven.every(n => n % 2 === 0)).to.be.eql(true);
  });
});
