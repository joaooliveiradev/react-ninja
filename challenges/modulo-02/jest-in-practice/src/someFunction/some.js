const some = (arr, func) => {
    if (arr.length === 0) return false
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) { return true }
    }
}

export default some;