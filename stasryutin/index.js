function сalc(operation, a, b) {
	switch (operation) {
		case 'add':
			return +a + +b;
			break;
		case 'multi':
			return +a * +b;
			break;
		case 'subtract':
			return +a - +b;
			break;
		default:
			return ("Нет таких значений");
	}
};

console.log(сalc('multi', 27, '27'));
console.log(сalc('add', '23', 23));
console.log(сalc('subtract', 7, true));
console.log(сalc('none', 1, 1));
