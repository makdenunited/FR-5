

function calc (operation, a, b){ 
    if (operation == 'add') {
        return a+b;
    } else if  (operation == 'multi') {
            return a*b;
        } else if (operation == 'subtract') {
                return a-b;
            }};
            console.log(calc('add', 1,2));
            console.log(calc('multi', 1,2));
            console.log(calc('subtract', 1,2));
        



function calc (operation, a, b){ 
switch (operation) {
    case 'add':
        return a+b;
        // break;
    case 'multi':
        return a*b;
        // break;
    case 'subtract':
        return a-b;
        // break;
}}
console.log(calc('add', 1,2));
console.log(calc('multi', 1,2));
console.log(calc('subtract', 1,2));





// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   };

  

// if (browser === 'Edge') {
//     alert ( "You've got the Edge!" );
// } else if (browser == 'Chrome' || browser =='Firefox'|| browser =='Safari' || browser =='Opera') {
//     alert ( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }


// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
//     }
