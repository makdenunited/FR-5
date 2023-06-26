// Цикл while от 1 до 19

let i = 1;
while (i <= 20) {
  console.log(i);
  i = i + 1;
}

// Цикл do while от 1 до 19

let k = 1;

do {
  console.log(i);
  i = k + 1;
} while (k < 20);

// Цикл for от 1 до 19

for (let j = 1; j < 20; j++) {
  console.log(j);
}

// Пропускаем итерацию, когда i равно 2 c помощью continue

for (var l = 0; i < 5; i++) {
  if (l === 2) {
    continue;
  }
  console.log(i);
}


// Цикл до 13 и на каждой итерации получаем лог количества четных и нечетных чисел

let evenCount = 0;
let oddCount = 0;

for (let num = 1; num <= 13; num++) {
  if (num % 2 === 0) {
    evenCount++;
    continue;
  }
  
  oddCount++;
  console.log(`Четные: ${evenCount}, Нечетные: ${oddCount}`);
}