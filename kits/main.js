let i = 1;

while (i <= 19) {
  console.log(i)
  i = i + 1;
}

// задача 2

let i = 1;

do {
console.log(i);
i = i + 1;
}
while (i <= 19);

// задача 3

let i = 1;

for (i = 1; i <= 19; i++) {
  console.log(i)
}

// задача 4

let even = 0;
let odd = 0;

for (let i = 0; i < 13; i++) {

  if (i % 2 == 0) {
  ++even;
  
  } else {
  ++odd;
  }
 }
 
 console.log('Четных чисел ' + even);
 console.log('Нечетных чисел ' + odd);