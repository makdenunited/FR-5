function calc(operation, a, b){
    switch(operation){
        case 'add':
            return Number(a) + Number(b);
            break;
        case 'multi':
            return Number(a) * Number(b);
            break;
        case 'subtract':
            return Number(a) - Number(b);
            break;
        default:
            break;
    }
}
console.log(calc('add',3,3));
console.log(calc('multi', 2,2));
console.log(calc('subtract',5,2));