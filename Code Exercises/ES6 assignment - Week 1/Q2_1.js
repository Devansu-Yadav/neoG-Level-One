// const packIt = (...args) => console.log(args)

// packIt(1,2,3,5,5)

// Converted to ES5 code
const packIt = function() {
    console.log(Array.prototype.slice.call(arguments));
}

packIt(1,2,3,5,5);