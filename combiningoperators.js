const volunteers = 20;
const students = 24;
const pizzas = 25;
const coaches = 0;

const moreStudents = students > volunteers;
console.log(`Are there more students than volunteers ${moreStudents}`);

const lessStudents = students < pizzas;
console.log(`Are there fewer students than pizzas ${lessStudents}`);

const enoughPizzas = coaches + students < pizzas;
console.log(`Do we have enough pizzas for everyboday? ${enoughPizzas}`);
