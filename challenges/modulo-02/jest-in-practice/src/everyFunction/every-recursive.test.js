import { expect } from 'chai';
import everyR from './every-recursive';

it('everyR should be a function', () => {
    expect(everyR).to.be.a('function');
})
it('everyR[], item => item should return true', () => {
    expect(everyR([], item => item)).to.be.ok
})
it('EveryR([0,2,3], item => item) should return false', () => {
    expect(everyR([0, 2, 3], item => item)).to.be.false
})

it('EveryR([1,2,3], item => item > 0) should return true', () => {
    expect(everyR([1, 2, 3], item => item > 0)).to.be.true
})
it('EveryR([1,2,3,4], item => item < 3) should return false', () => {
    expect(everyR([1, 2, 3, 4, 5], item => item < 3)).to.be.false
})
it('EveryR([1,2,3,4], item => item < 3) should return false', () => {
    expect(everyR([1, 2, 3, 4, 5], item => item < 3)).to.be.false
})

it('EveryR([5, 6, 7, 8, 9], item => item <= 9)) should return true', () => {
    expect(everyR([5, 6, 7, 8, 9], item => item <= 9)).to.be.true
})
it('everyR([1,2,3,4,5], (item, index) => item == index + 1) should return true', () => {
    expect(everyR([1, 2, 3, 4, 5], (item, index) => item == index + 1)).to.be.true
})

it('everyR([10, 20, 30], (item, index, arr) => index == arr.indexOf(item)) should return true', () => {
    expect(everyR([10, 20, 30], (item, index, arr) => index == arr.indexOf(item))).to.be.true
})

