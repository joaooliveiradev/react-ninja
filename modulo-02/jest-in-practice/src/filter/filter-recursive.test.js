'use strict';

import { expect } from 'chai';
import filter from './filter-recursive';

it('Filter should be a function', () => {
    expect(filter).to.be.a('function');
})

it('filter([1,2,3], (item) => item) should return [1,2,3]', () => {
    expect(filter([1, 2, 3], item => item)).to.be.deep.equal([1, 2, 3])
})
it('filter([0,1,2], (item) => item) should return [1,2]', () => {
    expect(filter([0, 1, 2], item => item)).to.be.deep.equal([1, 2])
})
it('filter([1,2,3], (item => item < 2) should return [1]', () => {
    expect(filter([1, 2, 3], item => item < 2)).to.be.deep.equal([1])
})
it('filter([1,2,3,5], (item, index) => item === index + 1) should return [1,2,3]', () => {
    expect(filter([1, 2, 3, 5], (item, index) => item === index + 1)).to.be.deep.equal([1, 2, 3])
})
it('filter([1,2,3,2,1,5], (item, index, arr) => index === arr.indexOf(item))', () => {
    const before = filter([1, 2, 3, 2, 1, 5], (item, index, arr) => index === arr.indexOf(item))
    expect(before).to.be.deep.equal([1, 2, 3, 5])
})