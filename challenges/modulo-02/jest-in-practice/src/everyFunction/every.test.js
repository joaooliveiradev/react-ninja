import { expect } from 'chai';
import every from './every';

it('Every should be a function', () => {
    expect(every).to.be.a('function')
})

it('Every([1,2,3], item => item > 1) should return false', () => {
    expect(every([1, 2, 3], item => item > 1)).to.be.false
})

it('Every([1,2,3], item => item > 0) should return true', () => {
    expect(every([1, 2, 3], item => item > 0)).to.be.true
})

it('every[1, 2, 5, 10], (item, index, array) => index === array.indexOf(item) should return false', () => {
    expect(every([1, 2, 5, 10, 5], (item, index, array) => index === array.indexOf(item))).to.be.false
})
it('every[1,3,5,7,9], item => (item % 2 == 1) should true', () => {
    expect(every([1, 3, 5, 7, 9], item => item % 2 == 1)).to.be.true
})

