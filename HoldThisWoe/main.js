function calc(a=0, b=0, operation){
    switch(operation){
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        default:
            return 'No operation is selected';
    }
}

console.log(calc(2, 2, 'add'));
