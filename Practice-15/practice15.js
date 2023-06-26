/*let i = 1;
do {
  console.log(i)
  i = i + 1;
} while (i < 20)*/

/*for (let i = 1; i < 20; i++) {
  console.log(i);
}*/


let chet = 0;
let nechet = 0;
for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    chet = chet + 1
  } else if (i % 2 != 0) {
    nechet = nechet + 1;
  }
}

console.log(`Четные ${chet}`);