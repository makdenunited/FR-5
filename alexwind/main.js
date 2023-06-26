let odd;
let even;
let OddCounter = 0;
let EvenCounter = 0;

for (let i = 1; i <= 13; i++) {

    if(i % 2 === 0) {
        OddCounter++
        console.log('Кол-во четных чисел ' + OddCounter)     
    } else {
        EvenCounter++
        console.log('Кол-во не четных чисел ' + EvenCounter)
    }
}