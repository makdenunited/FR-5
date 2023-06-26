let evenNumbers = 0;
let oddNumbers = 0;

for (let i = 1; i < 14; i++) {
  if (i % 2 == 0) {
    evenNumbers++;
  } else {
    oddNumbers++;
  }

  console.log(
    "[Итерация " +
      i +
      "] - " +
      "Четных чисел " +
      evenNumbers +
      " Нечетных " +
      oddNumbers
  );
}
