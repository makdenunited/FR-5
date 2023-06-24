// Операторы
const plus = '+'; 
const subtract = '-';
const multi = '*';

// Калькулятор. Код состоит из: функции, условное ветвление, switch case
function calculator(firstOperand, secondOperand, operation) { 
  switch (operation) {
    case plus:
      return Number(firstOperand + secondOperand);
    case subtract:
      return firstOperand - secondOperand;
    case multi:
      return firstOperand * secondOperand;
    default:
    console.log("Недопустимое значение, используйте значения типа: number")
    console.log("Также используйте операторы: plus +, subtract -, multi *")
      break;
  }
} 

console.log(calculator(5, 15, plus))
console.log(calculator(10, 5, subtract))
console.log(calculator(5, 5, multi))
