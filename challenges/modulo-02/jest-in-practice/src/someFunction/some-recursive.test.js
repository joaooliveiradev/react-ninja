import { expect } from 'chai';
import some from './some-recursive';

it('some([]) should return false', () => {
    expect(some([])).to.be.not.ok
})
it('some([1,2,3], item => item > 4) should return false', () => {
    expect(some([1, 2, 3], item => item > 4)).to.be.not.ok
})
it('some([0,1,2]), item => item > 0 should return true', () => {
    expect(some([0, 1, 2], item => item > 0)).to.be.ok
})

it('some([1,2,3,4,5], (item, index) => item == index + 1) should return true', () => {
    expect(some([1, 2, 3, 4, 5], (item, index) => item == index + 1)).to.be.ok
})

it('everyR([10, 20, 30], (item, index, arr) => index == arr.indexOf(item)) should return true', () => {
    expect(some([10, 20, 30], (item, index, arr) => index == arr.indexOf(item))).to.be.true
})

