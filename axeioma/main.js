
function calc(operation,a,b){
    switch(operation){
        case  'add':
            return a+b;
        case  "multi":
            return a * b;
        case 'sub':
            return a - b;
        default:
            return 'Error'
    }
}
console.log(calc('sub', 6 ,2))
