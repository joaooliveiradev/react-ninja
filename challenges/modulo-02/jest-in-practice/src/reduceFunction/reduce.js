const reduce = (arr, func, initialValue) => {
    let i, acc;
    initialValue == undefined ? (acc = arr[0], i = 1) : (acc = initialValue, i = 0);
    for (i; i < arr.length; i++) {
        acc = func(acc, arr[i], i, arr)
    }
    return acc
}

export default reduce