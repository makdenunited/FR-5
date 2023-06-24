let a = +prompt('Введите число', '');
let b = +prompt('Введите второе число', '');
let operation = prompt('Введите действие: add, multi, substract', '');
let c;
function calc(a, b, operation) {
  switch (operation) {
    case 'add':
      c = a + b;

      break;
    case 'multi':
      c = a * b;

      break;
    case 'subtract':
      c = a - b;

      break;
  }
  if (Number.isNaN(c) === true) {
    alert('Пожалуйста введите числа');
  } else {
    alert(c);
  }
}

calc(a, b, operation);
