const ADD = 'add';
const MULTI = 'multi';
const SUBTRACT = 'subtract';
const DIVISION = 'division';
const ERROR_MESSAGE = 'Error operation';


function calc(operation, a, b) {
  const isZero = (a / b === Infinity) ? 'На ноль делить нельзя' : a / b;
  switch (operation) {
    case ADD:
      return a + b;
    case MULTI:
      return a * b;
    case SUBTRACT:
      return a - b;
    case DIVISION:
      return isZero;
    default:
      return ERROR_MESSAGE;
  }
}


console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('division', 1, 2));
console.log(calc('division', 1, 0));
