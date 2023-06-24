function example() {

  let a = +prompt('Введите первое число.');
  let calc = prompt('Введите символ (+, -, *, /).');
  let b = +prompt('Введите второй символ.');

  switch (calc) {
    case '+':
      alert(`${a} + ${b} = ${a + b}`);
      break;

    case '-':
      alert(`${a} - ${b} = ${a - b}`);
      break;

    case '/':
      alert(`${a} ÷ ${b} = ${a / b}`);
      break;

    case '*':
      alert(`${a} ∙ ${b} = ${a * b}`);
      break;

    default:
      alert('Неккоректная операция!')
      break;
  }
}

example()

