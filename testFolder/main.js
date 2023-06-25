function calc (operation, a, b) {
    if (typeof a === number && typeof b === number) {}
        switch (operation) {
            case 'sum':
                return a + b;
            case 'multiply':
                return a * b;
            case 'subtrackt':
                return a - b;
            default: console.log('something went wrong');   
        }   
}

calc('sum', 100, 1)