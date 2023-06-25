// Создайте простую функцию калькулятор с именем сalc()
// С тремя параметрами a и b, а также operation
// Вызов сalc(‘add’, 1, 2) - возвращает 3
// Вызов сalc(‘multi’, 1, 2) - возвращает 2
// Вызов сalc(’subtract’, 3, 2) - возвращает 1

// function calc(operation, a, b){
//     if (operation === 'add'){
//         return a + b;
//     } else if (operation === 'multi'){
//         return a * b;
//     } else if (operation === 'subtract'){
//         return a - b;
//     }
// }
// console.log(calc('add', 6, 8));
// console.log(calc('multi', 6, 8));
// console.log(calc('subtract', 6, 8));

function calc(operation, a, b){
    switch(operation){
        case 'add':
            return Number(a+b);
            break;
        case 'multi':
            return Number(a*b);
            break;
        case 'subtract':
            return Number(a-b);
            break;
        default:
            console.log('Error')        
    }
}
console.log(calc('add', 5, '8'));
console.log(calc('multi', 6, 8));
console.log(calc('subtract', 6, 8));
