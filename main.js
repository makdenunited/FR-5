function calc(operation, a, b) {
    if (typeof (operation) == 'string' && (typeof (a) == 'number' && typeof (b) == 'number')) {
        switch (operation) {
            case 'add':
                return a + b
            case 'multi':
                return a * b
            case 'subtract':
                return a - b
            case 'division':
                div_result = a / b
                if (div_result === Infinity || div_result === -Infinity) {
                    return 'division by zero'
                }
                return div_result
            default:
                return 'incorrect operation'
        }
    }
    return 'incorrect parameters data'
}

console.log(calc('multi', 2, 9))
console.log(calc('add', 2, 7))
console.log(calc('subtract', 24, 10))
console.log(calc('123', 123, 123))
console.log(calc('add'))
console.log(calc('add', '123', 12))
console.log(calc('division', -42, 0))
console.log(calc('division', 54, 27))
console.log(calc('division', 54, 10))