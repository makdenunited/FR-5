function calc(operation, a, b) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "multi") {
    return a * b;
  } else if (operation === "subtract") {
    return a - b;
  }
}

const add = calc("add", 1, 2);
const multi = calc("multi", 1, 2);
const subtract = calc("subtract", 3, 2);

console.log(add);
console.log(multi);
console.log(subtract);

// function calc(operation, a, b) {
//   switch (operation) {
//     case "add":
//       console.log(a + b);
//       break;

//     case "multi":
//       console.log(a * b);
//       break;

//     case "subtract":
//       console.log(a - b);
//       break;
//     default:
//       console.log("error");
//   }
// }

// calc("add", 1, 2);
// calc("multi", 1, 2);
// calc("subtract", 3, 2);
