const apples = "apples";
const oranges = "oranges";
let isEqual;
isEqual = apples === oranges;
console.log(`Are apples and oranges the same? ${isEqual}`);

isEqual = apples !== oranges;
console.log(`Are apples and oranges not the same? ${isEqual}`);

const yourAge = 40;
const drivingAge = 18;
let canDrive;
canDrive = yourAge > drivingAge;

console.log(`I am old enough to drive? ${canDrive}`);
console.log(`I am old enough to drive ${yourAge > drivingAge}`);

const age = 32;
const legalDrivingage = 16;

console.log(`Can I drive ${age > legalDrivingage}`);

const volunteers = 20;
const students = 24;
const pizzas = 25;

//example 2
const moreStudents = students > volunteers;
console.log(`Are there more students than volunteers ${moreStudents}`);

const lessStudents = students < pizzas;
console.log(`Are there fewer students than pizzas ${lessStudents}`);
