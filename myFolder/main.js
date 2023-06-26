"use strict"
let i = 1;

while (i < 4) {
    console.log(i);
    i++;
}
console.log(`i = ${i}`);

let j = 1;

do {
    console.log(j);
    j++;
} while (j < 4);

for (i = 1; i < 4; i++) {
    console.log(i);
}
console.log(`i = ${i}`);

for (let k = 1; k < 10; k++) { 
    if (k % 2 == 0) continue;
    console.log(k);
}