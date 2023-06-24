function calc(operation, a, b){
  switch (operation, a, b) {
    case (operation === 'add') && a && b:
       console.log(a + b)
        break;
    case (operation === 'multi') && a && b:
        console.log(a * b)
        break;
    case (operation === 'subtract') && a && b:
        console.log(a - b)
       break;
    default:
       break;
  }
}

calc('add', 1, 2);
calc('multi', 1, 2);
calc('subtract', 3, 2);

calc('add', 7, 3);
calc('multi', 6, 6);
calc('subtract', 53, 3);


function сalc2(operation, a, b) {
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
        default: 
          return 'error';
          break;
    }
}

console.log(сalc2('add', 1, 1));
console.log(сalc2('multi', 1, 3));
console.log(сalc2('subtract', 7, 3));
console.log(сalc2('', 0, 0));