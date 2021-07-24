const filterR = (arr, func) => {
    return (function internalFilter(arrayInternal, counter) {
        if (arrayInternal.length === 0) return []
        const [head, ...tail] = arrayInternal;
        return [
            ...func(head, counter, arr) && [head], ...internalFilter(tail, counter + 1)
        ]
    })(arr, 0)

}
export default filterR