const find = (arr, func) => {
    return (function findInternal(arrInternal, counter) {
        if (arrInternal.length === 0) return undefined
        const [head, ...tail] = arrInternal;
        if (func(head, counter, arr)) return head
        return findInternal(tail, counter + 1)
    })(arr, 0)
}

export default find