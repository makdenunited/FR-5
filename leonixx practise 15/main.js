// Вывести в консоль числа от 1 до 19 с помощью цикла
// Сделать то же самое но с проверкой условия после тела цикла (do ... while)

// let i = 1; 
// while(i <= 19) {
//     console.log(i)
//     i++
// }

// let k = 0;
// do {
//     k = k + 1
//     console.log(k)
// } while(k <= 18)

// for(let i = 1; i <=19; i++) {
//     console.log(i)
// }

// for(let i = 1; i <=19; ++i) {
//     console.log(i)
// }
function CountNumber(k) {
    let twoQual = 0;
    let oneQual = 0;
    for(let i = 1; i <= k; i++) {
    if(i % 2 === 0) {
        twoQual = twoQual + 1
    }
    else {
        oneQual = oneQual + 1
    }
    }
    return `two number - ${twoQual}; one number - ${oneQual}`
}
console.log(CountNumber(15))