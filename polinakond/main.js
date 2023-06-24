function calc(a,b,operation) {
    if (isNumber(a) && isNumber(b)) {
    switch (operation) {
        case 'add':
            return a+b;
        case 'multi':
            return a*b;
        case 'subtract':
            return a-b;
            default:
                console.log('mistake');
         }
    }
    else {
        console.log('mistake');
    }
}

function isNumber(value) {
    return typeof value==='number' && !isNaN(value);
   }

console.log (calc(10,5,'add'))
console.log (calc(10,5,'multi'))
console.log (calc(10,5,'subtract'))
console.log (calc(5,5,'subtract'))
console.log(calc('b','l','a'))








// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case(0):
//          alert('Вы ввели число 0');
//          break;
//     case(1):
//         alert('Вы ввели число 1');
//         break;
//     case (2):
//     case (3):
//         alert('Вы ввели число 2, а может и 3');
//         break;
//     }