// //------------Objects------------------------------------
// // Create a person variable with two properties
// const person = {
//     name :"Monique",
//     likes:'Pizza'
// }
// console.log(person.likes);
// //Change value stored
// person.likes ='Spaghetti'
// //New output
// console.log(person.likes);

// //-----------Task 1 - Objects----------------------------

const personA = {
  firstName: "Monique",
  likes: "Pizza",
  age: 40,
};

const personB = {
  firstName: "Vivienne",
  likes: "Rice",
};
console.log(personA.firstName);
console.log(personA.likes);
console.log(personB.firstName);
console.log(personB.likes);

personA.firstName = "Stacy";
console.log("After Values");

console.log("After value change");
console.log(personA.firstName);
console.log(personB.firstName);
