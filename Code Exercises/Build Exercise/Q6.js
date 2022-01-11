const triangleType = (a, b, c) => {
    let typeOfTriangle = "";
    if(a + b + c !== 180) {
        return "Not A Triangle";
    }

    if(a === b && a === c) {
        typeOfTriangle = "Equilateral Triangle";
    } else if(a === b || b === c || a === c) {
        typeOfTriangle = "Isosceles Triangle";
    } else {
        typeOfTriangle = "Scalene Triangle";
    }
    return typeOfTriangle;
}

console.log("Type of triangle - ", triangleType(45, 45, 90));