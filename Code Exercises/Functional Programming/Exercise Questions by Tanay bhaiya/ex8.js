const increment = num => num + 1;

const square = num => num * num;

// [func1, func2, func3]
const compose = (...funcs) => {
    return (param) => funcs.reduce((prevFuncOutput, currentFunc) => currentFunc(prevFuncOutput), param);
}

const incrementThenSquare = compose(increment, square);
console.log(incrementThenSquare(2));