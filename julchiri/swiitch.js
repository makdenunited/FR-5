// Задание 1
function checkAge(age) {
    if (age < 18 ) {
        alert('you are not allowed');
    } else {
        alert ('you are welcome');
    }
}

checkAge('16');



// Задание 2

function calc (operation, a, b) {
    if (operation == 'add') { 
        return a+b;
    } else if (operation == 'multi') {
            return a*b;
         } else if (operation =='subtract') {
                return a-b;
             }
        }

calc ('add', 1, 2);



// switch
function calc (operation, a, b) {
switch (operation) {
    case 'add':
        alert(a+b);
        break;
    case 'multi':
        alert(a*b);
        break;
    case 'subtract':
        alert(a-b);
        break;
        default:
            alert("Something went wrong");
            }
}


