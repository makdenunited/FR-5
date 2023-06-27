function calc() {
	let number1 = prompt('Введите первое число:');
	let number2 = prompt('Введите 2 число:');
	let operation = prompt('Введите оператор (+ , - , * , / ):');
	let check1 = parseFloat(number1);
	let check2 = parseFloat(number2);
	const ERROR_M1 = 'Вам стоит подробнее узнать про числа.';
	const ERROR_M2 = 'Вы не ввели достаточно параметров или...\nВам стоит подробнее узнать про числа и операторы.';
	const ADD = '+';
	const SUB = '-';
	const MULTI = '*';
	const DIV = '/';

	if (number1 === '' || number2 === '' || operation === '' || number1 === null || number2 === null || operation === null) {
		alert(`${ERROR_M2}`);
	} else if (Number.isNaN(check1) || Number.isNaN(check2)) {
		alert(`Вы ввели: ${number1} ${operation} ${number2} = ?\n${ERROR_M1} `);
	} else if (operation === DIV && check2 === 0) {
		alert(`${number1} / ${number2} = НА НОЛЬ ДЕЛИТЬ НЕЛЬЗЯ!!`);
	} else {
		number1 = parseFloat(number1.replace(/,/,'.'));
		number2 = parseFloat(number2.replace(/,/,'.'));
		operation = operation.trim();
		switch (operation) {
			case ADD:
				alert(`${number1} + ${number2} = ${number1 + number2}`);
				break;
			case SUB:
				alert(`${number1} - ${number2} = ${number1 - number2}`);
				break;
			case MULTI:
				alert(`${number1} * ${number2} = ${number1 * number2}`);
				break;
			case DIV:
				alert(`${number1} / ${number2} = ${number1 / number2}`);
				break;
			default:
				alert(operation === '' ? 'Вы не ввели оператор.' : ERROR_M2);
				break;
		}
	}
}

for (let i = 10; i > 0; i--) {
	alert(`У вас остал${i > 1 ? 'о' : 'а'}сь ${i} попыт${i > 1 && i < 5 ? 'ки' : i === 1 ? 'ка' : 'ок'} найти ошибку.`);
	calc();
}
alert(`Вы исчерпали своё количество попыток!`);