// Вывод чисел от 1 до 19 в консоль
let i = 1;
while (i <= 19) {
    console.log(i)
    i = i + 1;
}
// Вывод чисел от 1 до 19 в консоль с проверкой условия после тела цикла
let k = 1;
do {
    console.log(k);
    k = k + 1;
} while (k < 20);
//   Вывод чисел от 1 до 19 в консоль циклом for
for (let l = 1; l <= 19; l++) {
    console.log(l);
}
// Объявление переменной до цикла for
let j = 1;
for (; j < 20; j++) {
    console.log(j);
}
// Вывод четных значений переменной t
for (let t = 1; t <= 10; t++) {
    // если true, пропустить оставшуюся часть тела цикла
    if (t % 2 == 1) continue;
    console.log(t);
}