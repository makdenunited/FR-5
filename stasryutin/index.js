let a = 1;
let b = '2';
let operation = 'add';

switch (operation) {
	case 'add':
		alert(+a + +b);
		break;
	case 'multi':
		alert(+a * +b);
		break;
	case 'subtract':
		alert(+a - +b);
		break;
	default:
		alert("Нет таких значений");
};
