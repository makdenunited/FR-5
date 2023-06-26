let j = 1;
while (j < 5) {
	console.log(j)
	j = j + 1;
}
// переписать на for
//пинг
for (;j > 1; j--) {
	console.log(j);
}
//понг
for (;j < 6; j++) {
	console.log(j);
}

let k = 5;
do {
	console.log(k);
	k = k + 1;
} while (k < 3);

let chet = 0;
let nechet = 0;

for (let l = 1; l <= 8; l++) {
	if (l % 2 === 0) {
		chet++;
	continue;
}
		nechet++;
}
console.log(`Чётных ${chet}`)
console.log(`Нечётных ${nechet}`)

// todo добавить переменные и сократить длину строки
for (let i = 25; i > 0; i--) {
	console.log(`остал${i % 10 > 1 || i % 10 ===0 || i > 10 && i < 15 ? 'О' : 'А'}сь ${i} попыт${i % 10 > 1 && i % 10 < 5 && i !== 11 && i !== 12 && i !== 13 && i !== 14 ? 'КИ' : i % 10 !== 1 || i === 11 ? 'ОК' : 'КА'}.`);
}