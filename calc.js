function calc(operation, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operation) {
      case 'add':
        result = a + b;
        break;
      case 'multi':
        result = a * b;
        break;
      case 'subtract':
        result = a - b;
        break;
      case 'division':
        result = (a / b === Infinity) ? 'На ноль делить нельзя' : a / b;
        break;
    }
    return console.log(`${result}`);
}

calc('add', 1, 2);
calc('multi', 1, 2);
calc('subtract', 3, 2);
calc('division', 1, 2);
calc('division', 1, 0);
