function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;            
        case 'mult':
            return a * b;            
        case 'sub':
            return a - b;            
        default:
            return 'wrong operation';
    }        
}
