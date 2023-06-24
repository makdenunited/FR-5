let a = parseFloat(prompt('введите первое число:'));
let x = prompt('введите оператор (+,-,*,/):');
let b = parseFloat(prompt('введите 2 число:'));
const ERROR_M1 = 'Вам стоит подробнее узнать про числа.';
const ERROR_M2 = 'Вы не ввели достаточно параметров или...\nВам стоит подробнее узнать про числа и операторы.';

switch (x) {
	case '+':
	case 'add':
		Number.isNaN(a) || Number.isNaN(b) ? confirm(`${ERROR_M1}\nВы пытались: `+(a+x+b)) :
			confirm(`${a} ${x} ${b}`+` = `+`${a+b}`);
	break;
	case '-':
	case 'subtract':
		Number.isNaN(a) || Number.isNaN(b) ? confirm(`${ERROR_M1}\nВы пытались: `+(a+x+b)) :
			confirm(`${a} ${x} ${b}`+` = `+`${a-b}`);
	break;
	case '*':
	case 'multi':
		Number.isNaN(a) || Number.isNaN(b) ? confirm(`${ERROR_M1}\nВы пытались: `+(a+x+b)) :
			confirm(`${a} ${x} ${b}`+` = `+`${a*b}`);
	break;
	case '/':
	case 'division':
		Number.isNaN(a) || Number.isNaN(b) ? confirm(`${ERROR_M1}\nВы пытались: `+(a+x+b)) :
			b === 0 ? confirm(`На ноль делить нельзя!`) : confirm(`${a}${x}${b}`+`=`+`${a/b}`);
		break;
	default:
		confirm(x === '' ? 'Вы не ввели оператор.' : ERROR_M2);
	break;
}