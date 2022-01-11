const obj = {
    aloo : 1,
    bhallo : 2
}

const {c : aloo = [2,3,4].push(5), aloo} = obj 

console.log(aloo) // Output:- SyntaxError: Identifier 'aloo' has already been declared