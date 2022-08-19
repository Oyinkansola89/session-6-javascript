function getFee(isMember) {
    return (isMember ? '£2.00' : '£10.00')
};

console.log('Output from tenary operator')


console.log(getFee(true));

console.log(getFee(false));

console.log(getFee(0));

// If/Else example

function getFeeIfElse(isMember) {
    if (isMember) {
        return ('£2.00');
    }
    else 
    { 
        return ('£10.00');
    }
} 

console.log('Output from if statement')
console.log(getFeeIfElse(true));
console.log(getFeeIfElse(false));
console.log(getFeeIfElse(0));