const ADD = 'add'
const MULTI = 'multi'
const SUBTR = 'subtract'
const DIV = 'division'

function isNum(n) {
    return !isNaN(n)
}


function calc(operation, a, b) {
    a = Number(a)
    b = Number(b)
    if (typeof (operation) == 'string' && isNum(a) && isNum(b)) {
        switch (operation) {
            case ADD:
                return a + b
            case MULTI:
                return a * b
            case SUBTR:
                return a - b
            case DIV:
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
console.log(calc('add', '123', '12'))
console.log(calc('division', -42, 0))
console.log(calc('division', 54, 27))
console.log(calc('division', 54, 10))