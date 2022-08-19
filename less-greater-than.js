//The > and < operators are "greater than" and "less than". You can use them to tell which of two numbers is bigger.

const volunteers = 20;
const students = 24;
const pizzas = 25;

const moreStudents = students > volunteers;
console.log('Are there more  students than volunteers? ' + moreStudents);

const   lessStudents = students < pizzas;
console.log('Are there fewer students than pizza? ' + lessStudents);

const enoughPizzas = (volunteers + students) < pizzas;
console.log('Do we have enough pizzas for everybody? '+enoughPizzas);