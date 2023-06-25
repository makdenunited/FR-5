let a = parseFloat(prompt('Введите первое число:'));
let x = prompt('Введите оператор (+ || add, - || sub, * || mul, / || div):');
let b = parseFloat(prompt('Введите 2 число:'));
const ERROR_M1 = 'Вам стоит подробнее узнать про числа.';
const ERROR_M2 = 'Вы не ввели достаточно параметров или...\nВам стоит подробнее узнать про числа и операторы.';
// todo: вынести проверку а и b из switch
switch (x) {
	case '+':
	case 'add':
		Number.isNaN(a) || Number.isNaN(b) ? alert(`${ERROR_M1}\nВы пытались: ` + (a + x + b)) :
			alert(`${a} ${x} ${b}` + ` = ` + `${a + b}`);
		break;
	case '-':
	case 'sub':
		Number.isNaN(a) || Number.isNaN(b) ? alert(`${ERROR_M1}\nВы пытались: ` + (a + x + b)) :
			alert(`${a} ${x} ${b}` + ` = ` + `${a - b}`);
		break;
	case '*':
	case 'mul':
		Number.isNaN(a) || Number.isNaN(b) ? alert(`${ERROR_M1}\nВы пытались: ` + (a + x + b)) :
			alert(`${a} ${x} ${b}` + ` = ` + `${a * b}`);
		break;
	case '/':
	case 'div':
		Number.isNaN(a) || Number.isNaN(b) ? alert(`${ERROR_M1}\nВы пытались: ` + (a + x + b)) :
			b === 0 ? alert(`На ноль делить нельзя!!`) : alert(`${a} ${x} ${b}` + ` = ` + `${a / b}`);
		break;
	default:
		alert(x === '' ? 'Вы не ввели оператор.' : ERROR_M2);
		break;
}