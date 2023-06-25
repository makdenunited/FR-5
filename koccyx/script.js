function calc1(operation, a, b) {
    switch(operation) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'substract':
            return a - b;
        default: 
            return 'wrong operation';
    }
}

  
console.log(calc1("add", 30, 10));
console.log(calc1("multi", 2, 4));
console.log(calc1("substract", 30, 21));
console.log(calc1("do smth", 201, 10));