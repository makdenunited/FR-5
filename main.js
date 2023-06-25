// Switch
function сalc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        break;
        case 'multi':
            return a * b;
        break;
        case 'subtract':
            return a - b;
        break;
        default: return 'enter the correct value';
    }
}

console.log(сalc('add', 1, 2));
console.log(сalc('multi', 1, 2));
console.log(сalc('subtract', 3, 2));
console.log(сalc('division', 10, 5));