const animals = ["cat", "dog", "wolf", "lion", "eagle", "zebra"];

console.log(animals[3]);

console.log(animals.length); // length always adds an extra 1 - so 6 not 5

for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];
  console.log(":" + animal);
}

console.log(animals.pop());
console.log(animals.push("chicken"));
console.log(animals);
console.log(animals.sort());
