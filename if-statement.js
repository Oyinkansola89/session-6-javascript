const iAmQueen = true;

if (iAmQueen) {
  console.log("Yes, I am a Queen");
}

function grades(marks) {
  if (marks > 90) {
    console.log("A+");
  }
}

if (marks > 80 && marks <= 90) {
  console.log("A");
}

if (marks > 70 && marks <= 80) {
  console.log("B");
}

grades(75);

// let count = 0;
//while (count < 10) {
// const randomNumber = Math.floor(Math.random() * 100);
// console.log("The random number is ", randomNumber);
//console.log("count:", count);
//  count = count + 1;
//}

for (let i = 1; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log("The random number is ", randomNumber);
}

//for loop is much more common than while loops because of potential for infinite loop
