import { expect } from 'chai';
import reduce from './reduce-recursive';
import reduceRight from './reduce-right-recursive';

it('reduce() should be a function', () => {
    expect(reduce).to.be.a('function')
})
it('reduce([1,2,3], (acc, item) => acc + item, 0) should return 6', () => {
    expect(reduce([1, 2, 3], (acc, item) => acc + item, 0)).to.be.equal(6)
})
it('reduce([2,3,4], (acc,item) => acc + item, 0) should return 9', () => {
    expect(reduce([2, 3, 4], (acc, item) => acc + item, 0)).to.be.equal(9)
})

it('reduce([1,2,3,4], (acc,item) => acc + item) should return 10', () => {
    expect(reduce([1, 2, 3, 4], (acc, item) => acc + item)).to.be.equal(10)
})

it('reduce([1,2]), (acc, item) => {acc["number-" +item] = item; return acc}, {} should return {"number-1": 1, "number-2": 2"', () => {
    const before = reduce([1, 2], (acc, item) => { acc["number-" + item] = item; return acc }, {})
    const after = { "number-1": 1, "number-2": 2 }
    expect(before).to.be.deep.equal(after)
})

it('reduce([1,2], (acc,item, index) => acc + index, 0) should return 1', () => {
    expect(reduce([1, 2], (acc, item, index) => acc + index, 0)).to.be.equal(1)
})


it('reduce([1,2], (acc,item, index,array) => acc + array[index], 0) should return 3', () => {
    expect(reduce([1, 2], (acc, item, index, array) => acc + array[index], 0)).to.be.equal(3)
})

it('reduceRight(["do","nan","fer"], (acc, item) => acc + item, "") should return fernando', () => {
    const before = reduceRight(['do', 'nan', 'fer'], (acc, item) => acc + item, "")
    const after = 'fernando';
    expect(before).to.be.equal(after)
})


