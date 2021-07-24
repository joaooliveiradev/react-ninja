'use strict';
import { expect } from 'chai';
import mapFunc from './map';


it('Map should be a function', () => {
    expect(mapFunc).to.be.an('function')
})

it('The map function should be 2 arguments', () => {
    expect(mapFunc.length).to.equal(2)
})

it('The result of the map should return an Array', () => {
    expect(mapFunc([1, 2, 3], item => item)).to.be.an('array')
})
