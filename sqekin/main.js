//Задача 2
const ADD = "add";
const MULTI = "multi";
const SUBTRACT = "subtract";

function checkCorrectType(value) {
  return typeof value === "number" ? true : false;
}

function calc(operation, a, b) {
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return "Некоректный тип данных";
  }

  switch (operation) {
    case ADD:
      if (checkCorrectType(a) && checkCorrectType(b)) {
        return a + b;
      }

    case MULTI:
      if (checkCorrectType(a) && checkCorrectType(b)) {
        return a * b;
      }

    case SUBTRACT:
      if (checkCorrectType(a) && checkCorrectType(b)) {
        return a - b;
      }

    default:
      return "Неизвестная операция";
  }
}

function showResult(value1, value2, value3) {
  return console.log(calc(value1, value2, value3));
}

showResult("add", 1, 2);
showResult("multi", 1, 2);
showResult("subtract", 3, 2);
