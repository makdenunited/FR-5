function calc(a, b, operation) {
    if (operation === 'add') {
        return (a + b);
    } else if (operation === 'multi') {
        return (a * b);
    } else if (operation === 'substract') {
        return (a - b);
    } else {
        console.log('this action is not defined');
        return;
    }
}


function calc_2(a, b, operation){
    switch(operation) {
        case 'add':
            return (a + b);
        case 'multi':
            return (a * b);
        case 'substract':
            return (a - b);

        default:
            console.log('this action is not defined');
            return;
    }
}


console.log(calc_2(2, 3, 'add'));
console.log(calc_2(2, 3, 'multi'));
console.log(calc_2(2, 3, 'substract'));
console.log(calc_2(2, 3, 'smth'));

console.log(calc(1, 2, 'add'));
console.log(calc(1, 2, 'multi'));
console.log(calc(3, 2, 'substract'));


