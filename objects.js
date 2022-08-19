//------------Objects------------------------------------
// Create a person variable with two properties
const person = {
    name :"Monique",
    likes:'Pizza'
}
console.log(person.likes);
//Change value stored
person.likes ='Spaghetti'
//New output
console.log(person.likes);

//-----------Task 1 - Objects----------------------------

const personA = {
    firstName :"Monique",
    likes:'Pizza'
}
const personB = personA

console.log('Before');
console.log(personA.firstName);
console.log(personB.firstName);

personA.firstName = 'Stacy';

console.log('After value change');
console.log(personA.firstName);
console.log(personB.firstName);