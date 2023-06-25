function Calc(operation, a, b) {
  switch (operation) {
    case 'add':
      result = a + b;
      console.log(result);
      break;
    case 'multi':
      result = a * b;
      console.log(result);
      break;
    case 'subtract':
      result = a - b;
      console.log(result);
      break;
  }
 }

 Calc('add', 2, 2) // 4
 Calc('multi',5, 4) // 20
 Calc('subtract', 5, 3)  //4