'use strict';
const filter = (arr = [], func = item => item) => {
    let newArray = [];
    if (arr.length === 0) return []
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr) ? newArray.push(arr[i]) : []
    }
    return newArray;
}
export default filter