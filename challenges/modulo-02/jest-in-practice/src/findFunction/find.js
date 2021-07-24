const find = (arr, func) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr) ? newArray.push(arr[i]) : []
    }
    return newArray[0]
}

export default find