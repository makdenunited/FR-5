let a = Number(prompt ('Введите первое число:','')); 


let b = Number(prompt ('Введите второе число:',''));

let operation = prompt ('Введите операцию:', 'add, multi, subtract');

function calc(operation, a, b) { 
  if (operation === 'add') {
    return (a) + (b);
  }
  else if (operation === 'multi') {
    return a * b;
  }
  else if (operation === 'subtract') {
    return a - b;
  }
  else if (operation !== 'add' || 'multi' || 'subtract') {
    alert ('Некорректные данные');
  }
  else {
  };
  };
const result = calc (operation, a, b)
alert (result);