//This program demostrates basic math operators + - / *

const x = 6;
const y = 3;
console.log("Variables");
console.log("x = " + x);
console.log("y = " + y);

const addition = x + y;
console.log("Addition: x + y = " + addition);

const subtraction = x - y;
console.log("Subtraction: x - y = " + subtraction);

const multipication = x * y;
console.log("Multipication: x * y = " + multipication);

const division = x / y;
console.log("Division: x / y = " + division);

//other useful mathes operators are %. **, ++ and --:

//The modulus % operator returns the remainder when dividing one operand by another:

const modulus = x % y;
console.log(`Remainder: x % y = ${modulus}`); // modulus = 1

//The exponentiation ** operator returns the result of raising
// the first operand to the power of the second:

const exponentiation = x ** y;
console.log(`Exponentiation: x ** y = ${exponentiation}`); // 7 raised to the power of 3 is 343
