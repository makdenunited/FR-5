let firstNum = 1;
let secondNum = 1;

for (let i = 1; i < 14; i++) {
  if (i % 2 == 1) {
    console.log(`Четных чисел: ${firstNum++}`);
  } else if (i % 2 == 0) {
    console.log(`Нечетных чисел: ${secondNum++}`);
  }
}
