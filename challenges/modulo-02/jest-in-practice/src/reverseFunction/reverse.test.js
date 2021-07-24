import { expect } from 'chai';
import reverse from './reverse'

it('reverse should be a function', () => {
    expect(reverse).to.be.a('function')
})

it('reverse([1,2,3]) should return [3,2,1]', () => {
    expect(reverse([1, 2, 3])).to.be.deep.equal([3, 2, 1])
})

it('reverse([]) should return []', () => {
    expect(reverse([])).to.be.deep.equal([])
})