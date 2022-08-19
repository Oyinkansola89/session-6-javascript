let i = 1;
let total = 0;
let limit = Math.floor(Math.random() * 10);
// While Loop
while ( i <= limit) {
    total = i;
    i = i + 1;
}
console.log('From the while loop')
console.log('Total: ' + total);