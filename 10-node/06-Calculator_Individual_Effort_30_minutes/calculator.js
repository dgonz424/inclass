// Instructions: Create a command-line node application that takes in parameters like this:
//  - node calculator.js add 1 2 ... and outputs 3
// console.log(parseFloat(process.argv[2])+parseFloat(process.argv[3]))
//  - node calculator.js subtract 5 2 ... and outputs 3
var number = process.argv;
var operator = process.argv;

console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));

console.log(parseFloat(number[2]) - parseFloat(number[3]));

console.log(parseFloat(number[2]) * parseFloat(number[3]));

console.log(parseFloat(number[2]) / parseFloat(number[3]));

console.log(parseFloat(number[2]) % parseFloat(number[3]));

if (operator==="add") {
    console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));
}

if (operator==="subtract") {
    console.log(parseFloat(number[2]) - parseFloat(number[3]));
}

if (operator==="multiply") {
    console.log(parseFloat(number[2]) * parseFloat(number[3]));
}

if (operator==="divide") {
    console.log(parseFloat(number[2]) / parseFloat(number[3]));
}

if (operator==="remainder") {
    console.log(parseFloat(number[2]) % parseFloat(number[3]));
}

//  - node calculator.js multiply 3 2 ... and outputs 6
//  - node calculator.js divide 8 2 ... and outputs 4
//  - node calculator.js remainder 7 2... and outputs 1
//  - Bonus: Enable your calculator application to also handle the below cases: node calculator.js exp 7 2 ... and output 49
//      (7 squared) node calculator.js algebra 4x+2=10... and output 2. (Hint: Assume the algebra will always be in this exact form and will always be addition)