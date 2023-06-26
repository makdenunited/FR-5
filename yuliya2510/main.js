function calc(operation, a, b) {
  switch (operation) {
    case "add":
      return Number(a) + Number(b);
    case "multi":
      return Number(a) * Number(b);
    case "subtract":
      return Number(a) - Number(b);
    default:
      return "Недопустимая операция";
  }
}
console.log(calc("add", 5, 4));
console.log(calc("multi", 5, 4));
console.log(calc("subtract", 5, 4));
