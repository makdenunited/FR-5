function calc(operation, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operation) {
      case 'add':
        return a + b;
        break;
      case 'multi':
        return a * b;
        break;
      case 'subtract':
        return a - b;
        break;
      case 'division':
        return (a / b === Infinity) ? 'На ноль делить нельзя' : a / b;
        break;
    }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('division', 1, 2));
console.log(calc('division', 1, 0));
