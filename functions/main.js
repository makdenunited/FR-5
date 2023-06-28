function calc(a, b, operation) {
  if (operation === "add") {
    return Number(a) + Number(b);
  } else if (operation === "subtract") {
    return Number(a) - Number(b);
  } else if (operation === "multi") {
    return Number(a) * Number(b);
  }
}
console.log(calc(2, 3, "add"));

function calc(a, b, operation) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "subtract") {
    return a - b;
  } else if (operation === "multi") {
    return a * b;
  }
}
console.log(calc(2, 3, "subtract"));

const add = "add";
const subtract = "subtract";
const multi = "multi";

function calc(a, b, operation) {
  switch (operation) {
    case add:
      return Number(a) + Number(b);
      break;

    case subtract:
      return a - b;
      break;

    case multi:
      return a * b;
      break;

    default:
      return "Что то не известное";
      break;
  }
}

console.log(calc(4, 10, "add"));
console.log(calc(10, 2, "subtract"));
console.log(calc(10, 2, "multi"));
