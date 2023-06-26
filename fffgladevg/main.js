// console.log('example');
// console.log(typeof('string'));

// function someFunc() {
//     console.log('function start here')
// }
//someFunc();
// function checkAge(age) { // объявляем функцию sayHi с параметром name
//     //const funcAge = age;
//     if (age < 18) {
//         console.log('u are not allowed');
//     } else {
//             console.log('u are welcome');
//         }
//   }
//   checkAge(19);

function calc(operation, a, b) {
    switch (operation){
        case 'add':
            return a + b;
            break;
        case 'multi':
            return a * b;
            break;
        case 'substract':
            return a - b;
            break;
    }
}
console.log(calc('add', 1, 5));
console.log(calc('substract', '1', '2'));
console.log(calc('multi', 2*2, 5));