function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b
        case 'multi':
            return a * b
        case 'subtract':
            return a - b
    }
}

console.log(calc('multi', 3, 2))
