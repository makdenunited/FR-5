function calc(operation, a, b) {
    switch(operation) {
        case 'add':
            a + b;
            break;
        case 'multi':
            a * b;
            break;
        case 'subtract':
            a - b;
            break;
        default:
            alert('Error');
            break;
    }
}

console.log(calc('add', 3, 2));
console.log(calc('multi', 3, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('minus', 3, 2));