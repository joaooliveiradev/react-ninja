'use strict';
const sum = require('./sum');
console.assert = require('assert');

console.assert(
    typeof sum === 'function',
    'Sum should as function'
);
console.assert(
    sum(1, 2) === 3,
    'Should sum(1,2) return 3'
)
console.assert(
    sum(2, 3) === 5,
    'shoul sum(2,3) return 5 '
)
console.assert(
    sum(1, 1) === 3,
    'should sum() === 2 return 2'
)
console.log('All test passed!')