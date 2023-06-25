function calc (a, b, operation) {
    switch (operation) {
        case 'add': 
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            return 'Error in your calculation' 
    }
}
  console.log(calc(1, 2, 'add'));
  console.log(calc(1, 3, 'multi'));
  console.log(calc(7, 4, 'subtract'));
  console.log(calc(1, 3, ''));