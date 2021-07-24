'use strict';

import filter from './filter';
import { expect } from 'chai';

it('filter should be a function', () => {
    expect(filter).to.be.an('function')
})
it('filter([0,1, 2], item => item > 1) should return [1,2]', () => {
    expect(filter([0, 1, 2], item => item)).to.be.deep.equal([1, 2])
})
it('filter([1, 2, 3, 4, 5], item => item > 2 ) should return [3,4,5]', () => {
    expect(filter([1, 2, 3, 4, 5], item => item > 2)).to.be.deep.equal([3, 4, 5])
})
it('filter([1, 2], (item) => item == 2) should return [2,3]', () => {
    expect(filter([1, 2], item => item == 2)).to.be.deep.equal([2])
})

it('filter[1, 2, 5, 10], (item) => item < 9) should return [1,2, 5]', () => {
    expect(filter([1, 2, 5, 10], (item) => item < 9)).to.be.deep.equal([1, 2, 5])
})

it('filter[5,7,9], (item, index ) => index > 0 should return [2, 5, 10]', () => {
    expect(filter([1, 2, 5, 10], (item, index) => index > 0)).to.be.deep.equal([2, 5, 10])
})
it('filter[10,20,30], (item, index, arr ) => arr.length > 0 ? item : null', () => {
    expect(filter([10, 20, 30], (item, index, arr) => index > 1 ? arr : item)).to.be.deep.equal([10, 20, 30])
})

it('filter[10, 20, 30, 30, 40, 60, 20], (item, index, arr ) => index === arr.indexOf(item)', () => {
    expect(filter([10, 20, 30, 30, 40, 60, 20], (item, index, arr) => index === arr.indexOf(item))).to.be.deep.equal([10, 20, 30, 40, 60])
})
it('filter() should return []', () => {
    expect(filter()).to.be.deep.equal([])
})
