// Калькулятор
function calc(operation, a, b) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "multi") {
    return a * b;
  } else if (operation === "substract") {
    return a - b;
  } else {
    return "Ошибка";
  }
}
console.log(calc("add", 1, 2));
console.log(сalc("multi", 1, 2));
console.log(calc("subtract", 3, 2));

function calc(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
      break;
    case "multi":
      return a * b;
      break;
    case "substract":
      return a - b;
      break;
    default:
      console.log("Нет таких значений!");
  }
}

console.log(calc("add", 2, 1));
