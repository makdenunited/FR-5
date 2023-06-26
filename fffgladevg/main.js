function calc(operation, a, b) {
    switch (operation){
        case 'add':
            return a + b;
            break;
        case 'multi':
            return a * b;
            break;
        case 'substract':
            return a - b;
            break;
    }
}
console.log(calc('add', 1, 5));
console.log(calc('substract', '1', '2'));
console.log(calc('multi', 2*2, 5));