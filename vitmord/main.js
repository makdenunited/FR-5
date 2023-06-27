console.log('1) while loop')
let i = 1

while (i <= 3) {
    console.log(i++)
}


console.log('2) do while loop')
let j = 3

do {
    console.log(j--);
} while (j > 0)

console.log('3) for loop');

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('4) for loop with continue')

for (let i = 1; i <= 33; i++) {
    if (i % 3 !== 0) continue
    console.log(i);
}
