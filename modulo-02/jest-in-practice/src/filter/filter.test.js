'use strict';

import { expect } from 'chai';
import filter from './filter';

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
it('filter(1) should throw a TypeError', () => {
    let error = undefined;
    try {
        filter(1)
    } catch (e) {
        error = e
    }
    expect(error.name).to.be.equal('TypeError')
})
it('filter({}) should throw a TypeError', () => {
    let error = undefined;
    try {
        filter({})
    } catch (e) {
        error = e
    }
    expect(error.name).to.be.equal('TypeError')
})
it('filter([1,2,3], "string") should return TypeError with the message "The second parameter must be a function"', () => {
    let error;
    try {
        filter(undefined, "string")
    } catch (e) {
        error = e
    }
    expect(error.message).to.be.equal('The second parameter must be a function')
})
