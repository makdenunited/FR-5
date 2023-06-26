function calc(operation, a, b) {
  switch (operation) {
    case 'add':
      a + b;
      console.log(a + b);
      break;
    case 'multi':
      a * b;
      console.log(a * b);
      break;
    case 'subtract':
      a - b;
      console.log(a - b);
      break;
  }
}

calc('add', 1, 2);
calc('multi', 1, 2);
calc('subtract', 3, 2);
