const fruitAndVeg = [
    'apple',
    'orange',
    'banana',
    'kiwi',
    'avocado',
    'celey',
    'aubergine'
];

const noAvocados = fruitAndVeg.filter((fruit)=> fruit.includes('avocado'));

console.log('\nThis list does not contain avocados \n\n' +noAvocados);

// const noCelery = fruitAndVeg.filter((fruit)=> !fruit.includes('celery'));

// console.log('\nThis list does not contain celery \n\n' +noCelery);