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

for (var i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
