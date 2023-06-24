function checkZero(b){
    if(b === 0) {
        return false;
    } else {
        return true
    }
}

function culc(a, b, operation = "add") {
    switch (operation) {
        case "add":
            return (a + b);
        case "subtract":
            return (a - b);
        case "multi":
            return (a * b);
        case "divide":
            if(checkZero(b)) {
                return (a / b);
            } else{
                return "На ноль не делим";
            }
        default: 
            return "Что-то не так";
    }
}

let a = +prompt( "первое число" );
let b = +prompt( "второе число" );
let operation = prompt( "операция на англ:" );
alert(culc(a, b, operation));
