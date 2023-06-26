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

for (let i = 25; i > 0; i--) {
	let on = i % 10;
	let sp = i > 10 && i < 15;
	let pf = on > 1 && on < 5 && !sp;

	console.log(`Остал${on > 1 || on === 0 || sp ? 'О' : 'А'}сь ${i} попыт${pf ? 'КИ' : on !== 1 || sp ? 'ОК' : 'КА'}.`);
}