const firstName = "Oyinkan";
const surnName = "Olatunji";

function sayHey(person) {
  return firstName;
}

sayHey(firstName);

function greeting(someone) {
  return "hey " + someone + "!";
}

greeting(surnName);

// arrow functions // const conversation = (person) => "Do you like playing " + person;

//                          conversation('oyinkan')              //called here

//its alwyays const not let when using arrow functions

function wagwan() {
  "Hiyaa";
}

wagwan();

function conversation(topic, girl) {
  return "Do you like " + topic + girl + " ?";
}

conversation("Stir Fry ", "Oyinkan");

// string, Numbers, Boolean, null, undefined
const name = "Oyinkan";
const age = 32;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; //intitalisation
