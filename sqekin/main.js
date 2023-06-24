//Задача 2
// Переписал на Switch, добавил проверку типа полученных данных и его преобразование.
// upd 24.06.2023 Добавил проверку на NaN, вынес преобразование к Number в отдельную функцию.
const ADD = "add";
const MULTI = "multi";
const SUBTRACT = "subtract";

function updateTypeToNumber(value) {
  return Number(value);
}

function checkDataType(value) {
  if (typeof value === "number") {
    return value;
  } else if (isNaN(value)) {
    console.log("Упс, получен NaN. Похоже вы ввели текст, ожидалось число.");
    return value + " - полученные значения";
  } else {
    console.log("Получен String, ожидался Number. Приводим к нужному типу..");
    return updateTypeToNumber(value);
  }
}

function calc(operation, a, b) {
  a = checkDataType(a);
  b = checkDataType(b);

  switch (operation) {
    case ADD:
      return a + b;

    case MULTI:
      return a * b;

    case SUBTRACT:
      return a - b;

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
