function calc (operation, a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        switch (operation) {
            case 'sum':
                return a + b;
            case 'multiply':
                return a * b;
            case 'subtract':
                return a - b;
            default: 
                console.log('unknown operation'); 
                return NaN;  
        }     
    } 
    else return NaN;
}

let result = calc('sum', 100, 2);
console.log(result);