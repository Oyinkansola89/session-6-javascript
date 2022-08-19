const fruitAndVeg = [
    'apple',
    'orange',
    'banana',
    'kiwi',
    'avocado',
    'celery',
    'aubergine'
];

let noAvocados = [];
let i = 0;

while (i < fruitAndVeg.length) {
    if (fruitAndVeg[i] !== 'avocado') {
        noAvocados.push(fruitAndVeg[i]);
    }
    i ++;
    console.log(i);
}
console.log(noAvocados);
