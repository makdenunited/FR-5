let i = 1;

while (i < 4) {
  console.log(i);
  i = i + 1;
}

let i = 5;
do {
  console.log(i);
  i = i + 3;
} while (i < 3);

let i = 1;
do {
  console.log(i);
  i = i + 1;
} while (i <= 19);

for (let i = 1; i < 4; i++) {
  console.log(i);
}

for (let i = 1; i <= 19; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 1) continue;
  console.log(i);
}
