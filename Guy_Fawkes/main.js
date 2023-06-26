function calc(operaton, a, b) {

  switch(operaton) {
    case 'add':
      console.log(a + b);
      break;
    case 'multi':
      console.log(a * b);
      break;
    case 'subtract':
      console.log(a - b);
      break;
  }
}

calc('add', 5, 6);
calc('multi', 5, 6);
calc('subtract', 5, 6);
console.log('You are doing great!');