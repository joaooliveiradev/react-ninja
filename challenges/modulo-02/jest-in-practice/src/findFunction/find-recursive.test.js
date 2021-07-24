import { expect } from 'chai';
import find from './find-recursive';
it('find should be a function', () => {
    expect(find).to.be.a('function');
})
it('find([1,2,3], item > 3) should return 1 ', () => {
    expect(find([1, 2, 3], item => item < 3)).to.be.equal(1)
})
it('find([5,10, 20], item > 10) should return 20 ', () => {
    expect(find([5, 10, 20], item => item > 4 && item <= 10)).to.be.equal(5)
})
it('find([6,7,8], (item, index) index === 2) should return 8 ', () => {
    expect(find([6, 7, 8], (item, index) => index === 2)).to.be.equal(8)
})
it('find([9,10,11], (item, index, array) => array[index] === 2) should return 10 ', () => {
    expect(find([9, 10, 11], (item, index, array) => array[index] === 11)).to.be.equal(11)
})

it('find([], item => item) should return undefined', () => {
    expect(find([], item => item)).to.be.undefined
})