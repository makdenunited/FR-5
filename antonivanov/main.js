// task - 13 Switch calc

function calc(operation, a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Пожалуйста, введите числа";
  }

  switch (operation) {
    case "add":
      return a + b;

    case "multi":
      return a * b;

    case "subtract":
      return a - b;

    default:
      return "Недопустимая операция";
  }
}

console.log(calc("add", 1, 2));
console.log(calc("multi", 4, 2));
console.log(calc("subtract", 3, 2));
console.log(calc("add", 1, "one"));
