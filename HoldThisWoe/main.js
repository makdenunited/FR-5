let a = 4;
let b = 2;
let operation = 'substract';
let result;

function calc(a=0, b=0, operation){
    switch(operation){
        case 'add':
            return a + b;
            break;
        case 'substract':
            return a - b;
            break;
        case 'multiply':
            return a * b;
            break;
        default:
            return 'No operation is selected';
            break;
    }
}

result = calc(a, b, operation);
console.log(result);
