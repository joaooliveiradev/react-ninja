'use strict';
import { expect } from 'chai';
import filterR from './filter-recursive';

it('filterR should be a function', () => {
    expect(filterR).to.be.a('function');
})

it('filterR([1,2,3,4], item => item > 2 ) should return [3,4]', () => {
    expect(filterR([1, 2, 3, 4], item => item > 1)).to.be.deep.equal([2, 3, 4])
})

it('filterR([1], item => item == 0 ) should return [1]', () => {
    expect(filterR([1], (item, index) => index == 0)).to.be.deep.equal([1])
})

it('filterR([1,2,3,4,5], item => item < 3 ) should return [1,2]', () => {
    expect(filterR([1, 2, 3, 4, 5], item => item < 3)).to.be.deep.equal([1, 2])
})

it('filteR([1, 2], (item) => item == 2) should return [2]', () => {
    expect(filterR([1, 2], item => item == 2)).to.be.deep.equal([2])
})

it('filter[1,2,5,10], (item, index ) => index > 0 should return [2, 5, 10]', () => {
    expect(filterR([1, 2, 5, 10], (item, index) => index > 0)).to.be.deep.equal([2, 5, 10])
})

it('filterR[1,2,3,5], (item, index) => item === index + 1 should return [1,2,3]', () => {
    expect(filterR([1, 2, 3, 5], (item, index) => item === index + 1)).to.be.deep.equal([1, 2, 3])
})
it('filterR[1,2,2,3,5,6,10,10], (item, index, arr) => index === arr.indexOf(item)', () => {
    expect(filterR([1, 2, 2, 3, 5, 6, 10, 10], (item, index, array) => index === array.indexOf(item))).to.be.deep.equal([1, 2, 3, 5, 6, 10])
})