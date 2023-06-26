function calc (operation,a, b){
    if (isNumber(a) && isNumber(b)) {
        switch (operation) {
            case 'add':
                console.log(a + b);
                break;
            case 'multi':
                console.log(a * b);
                break;
            case 'subtract':
                console.log(a - b);
                break;
            default:
                console.log('try again')
        }
    } else {
        console.log("not a number,enter a number and try again");
    }    
}

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

calc("add", 1, 2);
calc("multi", 1, 2);
calc("subtract", 3, 2);
calc("add", "c", 1);
calc("add", "1", 2);