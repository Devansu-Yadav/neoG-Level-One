const replaceAll = (arr, elem, replaceElem) => {
    let idx = arr.indexOf(elem);
    while(idx != -1) {
        arr[idx] = replaceElem;
        idx = arr.indexOf(elem, idx + 1);
    }
    return arr;
}
console.log("Array after replacing - ", replaceAll([1,5,3,5,6,8], 5, 10));