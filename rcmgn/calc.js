function calc(operation, x, y) {
  switch (operation) {
    case 'add':
      return x + y;
    case 'multi':
      return x * y;
    case 'subtract':
      return x - y;
  }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));

