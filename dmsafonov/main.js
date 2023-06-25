//1 if or switch
const browser = prompt('Введите название вашего браузера', '');

    if(browser === 'Edge'){
        alert( "You've got the Edge!" ); 
    } 
    else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
        alert( 'Okay we support these browsers too' );
    }
    else if(browser === null || browser === ''){
        alert('No value entered')
    }
    else{
        alert( 'We hope that this page looks ok!' );
    }

//2 switch or if
const number = +prompt('Введите число между 0 и 3', '');

switch(number){
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
    default:
        alert('Введённое число больше или меньше диапазона');
};
//Calc switch
function calc(operation,a,b){
    switch(operation){
        case 'add': return a+b;
        case 'multi': return a*b;
        case 'subtract': return a-b;
        default: console.log('Некорректные данные')
        }
    }
    
    console.log(calc('subtract', 300, 25));
    console.log(calc('subt', 300, 25));

    