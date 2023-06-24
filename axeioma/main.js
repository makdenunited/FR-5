function calc(operation,a,b){
    if(operation === 'add'){
        return a + b;
    } else if(operation === 'multi'){
        return a * b;
    } else if(operation === 'sub'){
        return a - b;
    } else {
        return 'Error'
    }
    
}

console.log(calc('sub', 6 ,2, ))