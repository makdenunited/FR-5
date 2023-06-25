let a = 1
let b = 2
let c = 3
function calc(a, b, operation) {
        switch (operation) {

                case  'add' :
                        console.log(a + b);

                        break;
                case 'multi' :
                        console.log(a * b);
                        break;
                case 'subtract':
                        console.log(c % b);

                        break;



        }
}
calc(1,2,'add')
calc(1,2,'multi')
calc(3,2,'subtract')  