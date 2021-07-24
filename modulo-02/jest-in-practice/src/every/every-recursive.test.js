import { expect } from 'chai';
import everyR from './every-recursive';

it('everyR should be a function', () => {
    expect(everyR).to.be.a('function');
})
it('everyR[], item => item should return true', () => {
    expect(everyR([], item => item)).to.be.true
})
it('Every([0,2,3], item => item) should return false', () => {
    expect(everyR([0, 2, 3], item => item)).to.be.false
})

it('Every([1,2,3], item => item > 0) should return true', () => {
    expect(everyR([1, 2, 3], item => item > 0)).to.be.true
})
it('Every([1,2,3,4], item => item < 3) should return false', () => {
    expect(everyR([1, 2, 3, 4, 5], item => item < 3)).to.be.false
})
it('Every([1,2,3,4], item => item < 3) should return false', () => {
    expect(everyR([1, 2, 3, 4, 5], item => item < 3)).to.not.be.ok
})

it('Every([5, 6, 7, 8, 9, 10], item => item > 4)) should return true', () => {
    expect(everyR([5, 6, 7, 8, 9, 10], item => item > 4)).to.be.true
})


