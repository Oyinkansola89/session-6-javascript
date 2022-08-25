//const iAmQueen = true;

//if (iAmQueen) {
// console.log("Yes, I am a Queen");
//}

//function grades(marks) {
//if (marks > 90) {
// console.log("A+");
// }
//}

//if (marks > 80 && marks <= 90) {
// console.log("A");
//}

//if (marks > 70 && marks <= 80) {
//  console.log("B");
//}

//grades(75);

//arrow function version of grades function:
const grades = (marks) => {
  // not using paranthesis as there is only one parameter
  if (marks > 90) {
    return "A+";
  }
  if (marks > 80 && marks <= 90) {
    return "A";
  }
  if (marks > 70 && marks <= 80) {
    return "B";
  }
  if (marks > 60 && marks <= 70) {
    return "C";
  }
  if (marks > 50 && marks <= 60) {
    return "D";
  }
  if (marks > 40 && marks <= 50) {
    return "E";
  }
  if (marks > 30 && marks <= 40) {
    return "F";
  }
};
console.log(grades(49));

// let count = 0;
//while (count < 10) {
// const randomNumber = Math.floor(Math.random() * 100);
// console.log("The random number is ", randomNumber);
//console.log("count:", count);
//  count = count + 1;
//}

//for (let i = 1; i < 10; i++) {
// const randomNumber = Math.floor(Math.random() * 100);
//console.log("The random number is ", randomNumber);
//}

//for loop is much more common than while loops because of potential for infinite loop
