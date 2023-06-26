const add = "add";
const sub = "substract";
const multi = "multi";
function calc(operation, a, b) {
    switch (operation){
        case add:
            return a + b;
        case multi:
            return a * b;
        case sub:
            return a - b;
        default:
            console.log("неизвестная операция");
    }
}
console.log(calc(add, Number(1), Number(5)));
console.log(calc(sub, Number('1'), Number('2')));
console.log(calc(multi, Number(2*2), Number(5)));