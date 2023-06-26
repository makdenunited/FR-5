let i = 1

while (i < 20){
  console.log(i);
   i++;
}

let b = 1;

do {
  console.log(b);
  b = b + 1;
} while (b < 3);

for (let i = 1; i < 20; i++){
  console.log(i);
}

let c = 1;

while (c == 1) {
  console.log('Начало');
  break;
  console.log('конец, который никогда не случится');
}
console.log('Конец');

for (let i = 0; i < 10; i++) {
  if ( i % 2 == 0 ) continue; 
  console.log(i);
}