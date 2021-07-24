const initialValueIsUndefined = initialValue => initialValue === undefined
const reverseRecursive = (arr) => {
    const [head, ...tail] = arr;
    return head == undefined ? [] : [...reverseRecursive(tail), head]
}
const reduceRightR = (arr, func, initialValue) => {
    const acc = initialValueIsUndefined(initialValue) ? arr.slice(0, 1) : initialValue;
    const arrCopy = initialValueIsUndefined(initialValue) ? arr.slice(1) : arr;
    return (function reduceRightInternal(accInternal, arrInternal, counter) {
        const [head, ...tail] = arrInternal;
        const accNext = () => func(accInternal, head, counter, arrCopy)
        return arrInternal.length === 0 ? accInternal : reduceRightInternal(accNext(), tail, counter + 1)
    })(acc, reverseRecursive(arrCopy), 0)
}

export default reduceRightR


