let even = 0;
let odd = 0;

for (let i = 0; i <= 5; i++) {
  if (i % 2 === 0) {
    even++;
    console.log('четных чисел: ' + even);
  } else {
    odd++;
    console.log('нечетных чисел: ' + odd);
  }
}
