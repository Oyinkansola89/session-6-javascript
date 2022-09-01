const fruitAndVeg = [
  "apple",
  "orange",
  "banana",
  "kiwi",
  "avocado",
  "celery",
  "aubergine",
];

let noAvocados = [];

for (let i = 4; i < fruitAndVeg.length; i++) {
  if (fruitAndVeg[i] !== "avocado") {
    noAvocados.push(fruitAndVeg[i]);
  }

  console.log(i);
}

console.log(noAvocados);

//if the fruit is not avocado, add it or push it in the noAvocado array, except avocado
// filter method - see filters-fruits.js
