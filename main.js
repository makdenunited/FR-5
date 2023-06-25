
function calc(operation,a,b){
    switch(operation){
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'div':
            return a / b;
        case 'sub':
            return a - b;
        default:
            return "I dont know thise operation";
    }
}
console.log(calc('add' ,1,2));
console.log(calc('multi' ,1,2));
console.log(calc('div' ,1,2));
console.log(calc('sub' ,1,2));
console.log(calc('' ,1,2));