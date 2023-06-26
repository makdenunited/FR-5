/*
Создайте простую функцию калькулятор с именем сalc()
С тремя параметрами a и b, а также operation
Вызов сalc(‘add’, 1, 2) - возвращает 3
Вызов сalc(‘multi’, 1, 2) - возвращает 2
Вызов сalc(’subtract’, 3, 2) - возвращает 1
Делить пока ничего не надо.
 */

function calc(a, b, operation) {
    switch (operation) {
        case 'add':
            console.log(a + b);
            break;
        case 'multi':
            console.log(a * b);
            break;
        case 'subtract':
            console.log(a - b);
            break;
        default:
            console.log('Что-то пошло не так');
    }
}
calc(2, 2, 'add')
console.log('Добавил что-то');

/*
Напишите if..else, соответствующий следующему switch:
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}


let usersBrowser = prompt('Какой у вас браузер?')

function showBrowser() {
    if (usersBrowser === 'Edge' || usersBrowser === 'edge') {
        alert('У вас Edge Браузер!')
    } else if (usersBrowser === 'Chrome' ||
        usersBrowser === 'Firefox' ||
        usersBrowser === 'Safari' ||
        usersBrowser === 'Opera') {
        alert('У вас что-то из перечисленного: Chrome, Firefox, Safari, Opera')
    } else {
        alert('Впервые вижу такой браузер!')
    }
}

showBrowser()
*/

/* Перписать в Switch

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}

let userNum = +prompt('Введите число между 0 и 5', '')

function showNum() {
    switch (userNum) {
        case 0:
            alert('Вы ввели число "0"')
            break;
        case 1:
            alert('Вы ввели число "1"')
            break;
        case 2:
            alert('Вы ввели число "2"')
            break;
        case 3:
            alert('Вы ввели число "3"')
            break;
        case 4:
        case 5:
            alert('Вы ввели число "4", а может и "5"')
            break;
        default:
            alert('Мы же написали, между 0 и 5')
    }
}
showNum()
*/