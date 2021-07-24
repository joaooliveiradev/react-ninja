'use strict';
const mapFunc = (arrayLike, callback) => {
    let newArray = [];
    arrayLike.forEach((element) => {
        newArray.push(callback(element))
    });
    return newArray
}

export default mapFunc