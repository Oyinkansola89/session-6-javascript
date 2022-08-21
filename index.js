const firstName = "Oyinkan";
const surnName = "Olatunji";

function sayHey(person) {
  return firstName;
}

console.log(sayHey(firstName));

function greeting(someone) {
  return "hey " + someone + "!";
}
console.log(greeting(surnName));

// arrow functions // const conversation = (person) => "Do you like playing " + person;

//                          conversation('oyinkan')              //called here

//its alwyays const not let when using arrow functions

//function wagwan() {
//("wagwan");
//}

//function conversation() {
//wagwan();

//("How are you");
//}

//conversation();
