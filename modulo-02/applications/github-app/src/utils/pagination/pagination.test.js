'use strict';
import { expect } from 'chai';
import pagination from './index';

test('pagination should be a function', () => {
    expect(pagination).to.be.a('function')
})
test('pagination({total: 1, activePage: 1}) should return [1]', () => {
    const params = { total: 1, activePage: 1 };
    const result = [1]
    expect(pagination(params)).to.be.deep.equal(result)
})
test('pagination({total: 2, activePage: 1}) should return [1,2]', () => {
    const params = { total: 2, activePage: 1 };
    const result = [1, 2]
    expect(pagination(params)).to.be.deep.equal(result)
})
test('pagination({total: 2, activePage: 3}) should return an RangeError with the message "activePage is invalid"', () => {
    let error;
    try {
        pagination({ total: 2, activePage: 3 })
    } catch (e) {
        error = e;
    }
    expect(error.name).to.be.equal('RangeError')
})
test('pagination({total: 5, activePage: 1}) should return [1,2,3,4,5]', () => {
    expect(pagination({ total: 5, activePage: 1 })).to.be.deep.equal([1, 2, 3, 4, 5])
})
test('pagination({total: 6, activePage: 1}) should return [1,2,3,"...",6]', () => {
    expect(pagination({ total: 6, activePage: 1 })).to.be.deep.equal([1, 2, 3, "...", 6])
})
test('pagination({total: 7, activePage: 3}) should return [1,2,3,4, "...",7]', () => {
    expect(pagination({ total: 7, activePage: 3 })).to.be.deep.equal([1, 2, 3, 4, "...", 7])
})
test('pagination({total: 9, activePage: 2}) should return [1, 2, 3, "...", 9]', () => {
    expect(pagination({ total: 9, activePage: 2 })).to.be.deep.equal([1, 2, 3, "...", 9])
})
test('pagination({total: 10, activePage: 5}) should return [1,"...", 4,5,6,"...", 10]', () => {
    expect(pagination({ total: 10, activePage: 5 })).to.be.deep.equal([1, '...', 4, 5, 6, "...", 10])
})
test('pagination({total: 30, activePage: 25}) should return [1,"...", 24,25,26,"...", 30]', () => {
    expect(pagination({ total: 30, activePage: 25 })).to.be.deep.equal([1, '...', 24, 25, 26, "...", 30])
})
test('pagination({total: 10, activePage: 7}) should return [1,...,6,7,8,9,10]', () => {
    expect(pagination({ total: 10, activePage: 7 })).to.be.deep.equal([1, '...', 6, 7, 8, 9, 10])
})
test('pagination({total: 10, activePage: 9}) should return [1,...8,9,10]', () => {
    expect(pagination({ total: 10, activePage: 9 })).to.be.deep.equal([1, '...', 8, 9, 10])
})
test('pagination({total: 8, activePage: 5}) should return [1, ..., 4, 5, 6, 7, 8]', () => {
    expect(pagination({ total: 8, activePage: 5 })).to.be.deep.equal([1, '...', 4, 5, 6, 7, 8])
})

test('pagination({total: 100, activePage:50 }) should return [1,"...", 49, 50, 51,"...", 100]', () => {
    expect(pagination({ total: 100, activePage: 50 })).to.be.deep.equal([1, '...', 49, 50, 51, "...", 100])
})