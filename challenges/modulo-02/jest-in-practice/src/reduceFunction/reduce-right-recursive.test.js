import { expect } from 'chai';
import reduceRightR from './reduce-right-recursive';

it('reduceRightR should be a function', () => {
    expect(reduceRightR).to.be.a('function')
})

it('reduceRight(["do", "nan", "fer"], (acc, item) => acc + item, ""), should return fernando', () => {
    expect(reduceRightR(["do", "nan", "fer"], (acc, item) => acc + item, '')).to.be.equal('fernando')
})