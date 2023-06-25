function calc(a,b,operation){
    switch(operation){
        case '+':
            return a + b;
        
        case '-':
            return a - b;
        
        case '*':
            return a * b;

        default:
            console.log('No such values')
    }
}

console.log(calc(2,3,'+'));
console.log(calc(3,2,'-'));
console.log(calc(2,3,'*'));
// console.log(calc(2,3,'.'));