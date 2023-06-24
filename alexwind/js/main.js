// let a = 1;
// let b = 2;
// let operation = 'multy';

// switch (operation) {
//     case 'add':
//         return a + b;
   
//     case 'multy':
//         return a * b;
       
//     case 'subtract':
//         return a - b;        
// }

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
//   }


// let browser = 'Edge'

// if(browser == 'Edge') {
// alert("You 've got the Edge!");
// } else if (browser == 'Opera' ||
//            browser == 'Firefox' ||
//            browser == 'Safari' ||
//            browser == 'Chrome') 
// {
// alert('Okay we support these browsers too');
// } else {
// alert('We hope that this page looks ok!');
// }

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }


const number = +prompt('Введите число между 0 и 3', '');

switch(number) {
    case 0: 
        alert('Вы ввели число 0');
        break

    case 1: 
        alert('Вы ввели число 1');
        break

    case 2:
    case 3:   
        alert('Вы ввели число 2, либо 3');
        break
 
    default:
        alert('вы ввели не 0, 1, 2 и не три')
}

