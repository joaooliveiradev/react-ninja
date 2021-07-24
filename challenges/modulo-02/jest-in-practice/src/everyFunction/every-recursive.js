const everyR = (arr, func) => {
    return (function everyInternal(arrInternal, counter) {
        if (arrInternal.length === 0) return true
        const [head, ...tail] = arrInternal;
        if (!func(head, counter, arr)) return false
        return everyInternal(tail, counter + 1);
    })(arr, 0)
}
export default everyR