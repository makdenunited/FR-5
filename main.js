
function calc(operation,a,b){
    switch(operation){
        case 'add':
            return a+b;
            break;
        case 'multi':
            return a*b;
            break;
        case 'div':
            return a/b;
            break;
        case 'sub':
            return a-b;
            break;
        default:
            return "I dont know thise operation";
    }
}
console.log(calc('' ,1,2));