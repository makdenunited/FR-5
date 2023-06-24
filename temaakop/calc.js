function calc(operation, a, b) {
    switch(operation) {
        case 'add':
            return a + b;
            break;
        case 'multi':
            return a * b;
            break;
        case 'subtract':
            return a - b;
            break;
    }
}
console.log(calc('multi', 23, 3))