function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            console.log('Я не знаю, что это за оператор!');
            break;
    }
}

console.log(calc('add', 2, 2));
console.log(calc('multi', 2, 2));
console.log(calc('subtract', 2, 2));