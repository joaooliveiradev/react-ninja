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
// test('pagination({total: 5, activePage: 1}) should return [1,2,3,4,5', () => {
//     expect(pagination({ total: 5, activePage: 1 })).to.be.deep.equal([1, 2, 3, 4, 5])
// })
// test('pagination({total: 6, activePage: 1}) should return [1,2,3,"...",6]', () => {
//     expect(pagination({ total: 6, activePage: 1 })).to.be.deep.equal([1, 2, 3, "...", 6])
// })
test('pagination({total: 7, activePage: 3}) should return [1,2,3,4,"...",7]', () => {
    expect(pagination({ total: 10, activePage: 5 })).to.be.deep.equal([1, '...', 4, 5, "...", 10])
})

