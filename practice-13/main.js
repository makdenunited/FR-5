const operation = prompt("Введите операцию add(+), subt(-), multi(*), div(/)");
const firstNumber = +prompt("Введите первое число");
const secondNumber = +prompt("Введите второе число");


function calc (operation, firstNumber, secondNumber) {

    switch (operation) {
        case 'add':
        case '+':
            alert (`${firstNumber} ${operation} ${secondNumber}` + ` = ` + `${firstNumber + secondNumber}`)
            break;
        case 'subt':
        case '-':
            alert (`${firstNumber} ${operation} ${secondNumber}` + ` = ` + `${firstNumber - secondNumber}`)
            break;
        case 'multi':
        case '*':
            alert (`${firstNumber} ${operation} ${secondNumber}` + ` = ` + `${firstNumber * secondNumber}`)
        case 'div':
        case '/':
            !secondNumber == 0 ? alert (`${firstNumber} ${operation} ${secondNumber}` + ` = ` + `${firstNumber / secondNumber}`) : alert ("На ноль делить нельзя")
            break;
        default:
            alert ("Неверное значение")
    }

}

alert (calc(operation, firstNumber, secondNumber));