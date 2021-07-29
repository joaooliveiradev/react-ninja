'use strict';
import { render } from "react-dom";
const pagination = ({ total, activePage }) => {
    if (activePage > total) throw new RangeError('activePage is invalid');
    if (total <= 5) {
        return Array.from({ length: total }, (_, i) => (i + 1))
    }
    const totalPages = Array.from({ length: total }, (items, i) => (i + 1), '...');
    const rightActivePage = activePage + 1;
    const leftActivePage = activePage - 1;
    let result;
    let rightRange;
    let leftRange;
    let leftRangeArr;
    let rightRangeArr;
    //Faz o Range entre dois pontos de vetores. 
    const makeRange = (sideA, sideB) => {
        return [...totalPages.slice(sideA, sideB)]
    }
    leftRangeArr = makeRange(totalPages[0], leftActivePage - 1);
    rightRangeArr = makeRange(rightActivePage, totalPages.length - 1);
    if (activePage == 1) {
        rightRangeArr = makeRange(rightActivePage + 1, totalPages.length - 1);
        result = totalPages.filter(item => !rightRangeArr.includes(item));
        result.splice(rightActivePage + 1, 0, '...');
        return result
    } else if (leftRangeArr.length >= 2 && rightRangeArr.length >= 2) {
        let leftResult = totalPages.filter(item => !leftRangeArr.includes(item))
        result = leftResult.filter(item => !rightRangeArr.includes(item))
        result.splice(totalPages[0], 0, '...').concat(result.splice(-1, 0, '...'));
        return result
    } else if (leftRangeArr.length >= 2) {
        result = totalPages.filter(item => !leftRangeArr.includes(item));
        result.splice(totalPages[0], 0, '...');
        return result;
    } else if (rightRangeArr.length >= 2) {
        result = totalPages.filter(item => !rightRangeArr.includes(item));
        result.splice(rightActivePage, 0, '...');
        return result;
    }
}
export default pagination