const fruitAndVeg = [
  "apple",
  "orange",
  "banana",
  "kiwi",
  "avocado",
  "celery",
  "aubergine",
];

//Filter method 1 -
//const noAvocados = fruitAndVeg.filter((fruit) => !fruit.includes("e")); //array methods
//console.log("\nThis list does not contain fruits with the letter e \n\n" + noAvocados);
const noAvocados = fruitAndVeg.filter((fruit) => !fruit.includes("avocado"));
console.log("\nThis list does not contain avocados \n\n" + noAvocados);

//Filter method 2 -
//const noAvocados = fruitAndVeg.filter((fruit) => {
// console.log("fruit", fruit);
// return fruit.includes("e");
//});

// const noCelery = fruitAndVeg.filter((fruit)=> !fruit.includes('celery'));

// console.log('\nThis list does not contain celery \n\n' +noCelery);
