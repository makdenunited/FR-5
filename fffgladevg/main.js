const add = "add";
const sub = "substract";
const multi = "multi"
function calc(operation, a, b) {
    switch (operation){
        case add:
            return a + b;
        case multi:
            return a * b;
        case sub:
            return a - b;
    }
}
console.log(calc(add, 1, 5));
console.log(calc(sub, '1', '2'));
console.log(calc(multi, 2*2, 5));