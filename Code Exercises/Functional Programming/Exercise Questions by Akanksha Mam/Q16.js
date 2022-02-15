const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
];

const input1 = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

const sumObjectsByKey = (...objs) => {
    return objs.reduce((acc, currentObj) => {
      for (let property in currentObj) {
        if (currentObj.hasOwnProperty(property))
          acc[property] = (acc[property] || 0) + currentObj[property];
      }
      return acc;
    }, {});
}

const res = input1.reduce((acc, currentElem) => acc[currentElem] ? {...acc, [currentElem]: acc[currentElem] + 1}: {...acc, [currentElem]: 1}, {});
const res1 = input.reduce((acc1, elem) => sumObjectsByKey(acc1, elem.reduce((acc2, currentElem) => acc2[currentElem] ? {...acc2, [currentElem]: acc2[currentElem] + 1}: {...acc2, [currentElem]: 1}, {})), {});

console.log(res1);