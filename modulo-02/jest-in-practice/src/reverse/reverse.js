const reverse = (arr) => {
    let newArray = [];
    for (let i = arr.length; i--;)
        newArray.push(arr[i])
    return newArray
}

export default reverse