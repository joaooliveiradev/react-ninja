const some = (arr, func) => {
    return (function someInternal(arrayInternal, counter) {
        if (arrayInternal.length === 0) return false;
        const [head, ...tail] = arrayInternal;
        if (func(head, counter, arr)) { return true }
        return someInternal(tail, counter + 1)
    })(arr, 0)
}

export default some;