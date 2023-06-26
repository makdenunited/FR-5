// While
// Вывести в консоль числа от 1 до 19 с помощью цикла

let i = 1;
while (i < 19) {
  console.log(i)
  i = i + 1;
}


// Сделать то же самое но с проверкой условия после тела цикла (do ... while)

let i = 1;

do {
  console.log(i);
	i = i + 1;
} while (i < 19);

// For
// Перепишите свои while циклы на циклы for
// option 1

for(let i = 1; i<20; i++) {
    console.log(i);
}

// option 2

let i = 1; 
for (; i < 20; i++) { 
  console.log(i);
}