const operation = prompt('Введите интересующую операцию', '');
const numberA = +prompt('Введите первое переменную?');
const numberB = +prompt('Введите второе переменную?');
// console.log(numberA, numberB);
function calc(operation, numberA, numberB) {
  if (isNaN(numberA) || isNaN(numberB)) {
    alert('Некорректная переменная');
    return;
  }
  switch (operation) {
    case 'add':
      alert(numberA + numberB);
      break;

    case 'multi':
      alert(numberA * numberB);
      break;

    case 'subtract':
      alert(numberA - numberB);
      break;

    default:
      alert('Выбрана недоступная операция');
      break;
  }
}

calc(operation, numberA, numberB);
