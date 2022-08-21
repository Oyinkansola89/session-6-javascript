const firstName = "Oyinkan";
const surnName = "Olatunji";

function sayHey(person) {
  return "girl ";
}
sayHey(firstName);

function greeting(person) {
  return "hey! " + "" + person;
}
greeting(surnName);

// arrow functions // const conversation = (person) => "Do you like playing " + person;

//                          conversation('oyinkan')              //called here

//its alwyays const not let when using arrow functions

function wagwan() {
  console.log("wagwan");
}

function conversation() {
  wagwan();
  console.log("How are you");
}

conversation();
