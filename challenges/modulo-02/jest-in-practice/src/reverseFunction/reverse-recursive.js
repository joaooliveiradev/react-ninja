const reverse = (arr) => {
    const [head, ...tail] = arr;
    return head == undefined ? [] : [...reverse(tail), head]
}

export default reverse