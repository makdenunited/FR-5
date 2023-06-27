function calc() {
	let a = prompt('Введите первое число:');
	let x = prompt('Введите оператор (+ || add, - || sub, * || mul, / || div):');
	let b = prompt('Введите 2 число:');
	const ERROR_M1 = 'Вам стоит подробнее узнать про числа.';
	const ERROR_M2 = 'Вы не ввели достаточно параметров или...\nВам стоит подробнее узнать про числа и операторы.';
	let c = parseFloat(a);
	let d = parseFloat(b);

	if (a === '' || b === '' || x === '' || a === null || b === null || x === null) {
		alert(`${ERROR_M2}`);
	} else if (Number.isNaN(c) || Number.isNaN(d)) {
		alert(`Вы ввели: ${a} ${x} ${b} = ?\n${ERROR_M1} `);
	} else {
		a = parseFloat(a.replace(/,/,'.'));
		b = parseFloat(b.replace(/,/,'.'));
		x = x.trim();
		switch (x) {
			case '+':
			case 'add':
				alert(`${a} + ${b} = ${a + b}`);
				break;
			case '-':
			case 'sub':
				alert(`${a} - ${b} = ${a - b}`);
				break;
			case '*':
			case 'mul':
				alert(`${a} * ${b} = ${a * b}`);
				break;
			case '/':
			case 'div':
				b === 0 ? alert(`${a} / ${b} = НА НОЛЬ ДЕЛИТЬ НЕЛЬЗЯ!!`) : alert(`${a} / ${b} = ${a / b}`);
				break;
			default:
				alert(x === '' ? 'Вы не ввели оператор.' : ERROR_M2);
				break;
		}
	}
}

for (let i = 10; i > 0; i--) {
	alert(`У вас остал${i > 1 ? 'о' : 'а'}сь ${i} попыт${i > 1 && i < 5 ? 'ки' : i === 1 ? 'ка' : 'ок'} найти ошибку.`);
	calc();
}
alert(`Вы исчерпали своё количество попыток!`);