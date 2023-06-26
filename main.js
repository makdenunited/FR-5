function calc (operation,a,b) {
    switch (operation) {
        case 'add': return a + b;
        case 'subtract': return a - b;
        case 'multi': return a * b;
        case 'divide': if (a > 0 && b > 0) {
            return a / b;
        }
        else {
            return 'error'
        }
        default: break;
    }
}
console.log(calc('add',1,2));
console.log(calc('subtract',1,2));
console.log(calc('multi',1,2));
console.log(calc('divide',1,1));