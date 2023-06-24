function calc(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
      break;
    case "multi":
      return a * b;
      break;
    case "subtract":
      return a - b;
      break;
    default:
      return "Неизвестное значение";
  }
}
console.log(calc("add", 1, 1));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));
