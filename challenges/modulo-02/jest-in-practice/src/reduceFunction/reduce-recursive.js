const reduce = (arr, func, initialValue) => {
    //mutei muitas variaveis, evite fazer mutabilidade mano que raiva aaaaaaa
    let acc, counter, arrayCopy = arr;
    if (initialValue === undefined) {
        arrayCopy = arr.slice(1)
        acc = arr[0]
        counter = 1;
    } else {
        acc = initialValue;
        counter = 0;
    }
    return (function reduceInternal(arrInternal, counter) {
        if (arrInternal.length === 0) { return acc }
        const [head, ...tail] = arrInternal;
        acc = func(acc, head, counter, arr);
        return reduceInternal(tail, counter + 1)
    })(arrayCopy, counter)
}

export default reduce